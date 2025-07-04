
'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Heading } from '@/components/markdown-preview';
import { docPages, type DocPage } from '@/data/docs';

type DocsLayoutContextType = {
    pages: DocPage[];
    updatePageIcon: (slug: string, icon: string) => void;
    headings: Heading[];
    setHeadings: (headings: Heading[]) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    activeHeadingId: string | null;
    setActiveHeadingId: (id: string | null) => void;
};

const DocsLayoutContext = createContext<DocsLayoutContextType | undefined>(undefined);

const METADATA_STORAGE_KEY = 'react-codex-pagemetadata';

export function DocsLayoutProvider({ children }: { children: React.ReactNode }) {
    const [pages, setPages] = useState<DocPage[]>(docPages);
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeHeadingId, setActiveHeadingId] = useState<string | null>(null);

    useEffect(() => {
        try {
            const savedData = localStorage.getItem(METADATA_STORAGE_KEY);
            if (savedData) {
                const overrides = JSON.parse(savedData);
                setPages(currentPages => 
                    currentPages.map(p => overrides[p.slug] ? { ...p, ...overrides[p.slug] } : p)
                );
            }
        } catch (error) {
            console.error("Failed to load page data from localStorage", error);
        }
    }, []);
    
    const updatePageIcon = (slug: string, icon: string) => {
        setPages(currentPages => 
            currentPages.map(p => p.slug === slug ? { ...p, icon } : p)
        );

        try {
            const savedData = localStorage.getItem(METADATA_STORAGE_KEY);
            const overrides = savedData ? JSON.parse(savedData) : {};
            if (!overrides[slug]) overrides[slug] = {};
            overrides[slug].icon = icon;
            localStorage.setItem(METADATA_STORAGE_KEY, JSON.stringify(overrides));
        } catch (error) {
            console.error("Failed to save page data to localStorage", error);
        }
    };

    const value = { pages, updatePageIcon, headings, setHeadings, searchTerm, setSearchTerm, activeHeadingId, setActiveHeadingId };

    return (
        <DocsLayoutContext.Provider value={value}>
            {children}
        </DocsLayoutContext.Provider>
    );
}

export function useDocsLayout() {
    const context = useContext(DocsLayoutContext);
    if (context === undefined) {
        throw new Error('useDocsLayout must be used within a DocsLayoutProvider');
    }
    return context;
}
