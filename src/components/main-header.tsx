"use client";

import { usePathname, useRouter, useParams } from 'next/navigation';
import { Layout, Input, Button } from 'antd';
import { SearchOutlined, EyeOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { useSidebar } from '@/components/sidebar-provider';

const { Header } = Layout;

type MainHeaderProps = {
    searchTerm: string;
    onSearchChange: (term: string) => void;
};

export const MainHeader = ({ searchTerm, onSearchChange }: MainHeaderProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const { collapsed, toggleSidebar } = useSidebar();
    const isEditPage = pathname.endsWith('/edit');
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    const handleViewClick = () => {
        router.push(`/${slug}`);
    };

    return (
        <Header style={{ 
            padding: '0 16px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px',
            position: 'sticky',
            top: 0,
            zIndex: 20,
            background: 'var(--ant-color-bg-container)',
            borderBottom: '1px solid var(--ant-color-border)',
            height: 64,
        }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={toggleSidebar}
                className="md:hidden"
            />
            
            <div style={{ flex: 1 }}>
                {isEditPage ? (
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={handleViewClick} icon={<EyeOutlined />}>
                            View Page
                        </Button>
                    </div>
                ) : (
                    <div style={{ maxWidth: '400px', marginLeft: 'auto' }}>
                        <Input
                            prefix={<SearchOutlined />}
                            placeholder="Search documentation..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            allowClear
                            style={{ width: '100%' }}
                        />
                    </div>
                )}
            </div>
            <ThemeToggle />
        </Header>
    );
};