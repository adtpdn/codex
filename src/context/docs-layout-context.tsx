
'use client'

import React, { createContext, useContext, useState } from 'react';
import type { Heading } from '@/components/markdown-preview';

type DocsLayoutContextType = {
    headings: Heading[];
    setHeadings: (headings: Heading[]) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
};

const DocsLayoutContext = createContext<DocsLayoutContextType | undefined>(undefined);

export function DocsLayoutProvider({ children }: { children: React.ReactNode }) {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const value = { headings, setHeadings, searchTerm, setSearchTerm };
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
