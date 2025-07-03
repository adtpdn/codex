'use client';

import * as React from 'react';
import { ChevronsUpDown, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Checkbox } from './checkbox';
import { ScrollArea } from './scroll-area';

export type TreeNode = {
  value: string;
  title: string;
  children?: TreeNode[];
};

type TreeSelectProps = {
  treeData: TreeNode[];
  value?: string | string[];
  onChange: (value: string | string[] | undefined) => void;
  multiple?: boolean;
  placeholder?: string;
};

const TreeSelectContext = React.createContext<{
  multiple?: boolean;
  selected: string[];
  handleSelect: (value: string) => void;
}>({
  selected: [],
  handleSelect: () => {},
});

const TreeSelectNode: React.FC<{ node: TreeNode }> = ({ node }) => {
  const { multiple, selected, handleSelect } = React.useContext(TreeSelectContext);
  const [isOpen, setIsOpen] = React.useState(true);
  const isSelected = selected.includes(node.value);

  const onSelect = (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();
    handleSelect(node.value);
  };

  const hasChildren = node.children && node.children.length > 0;

  if (hasChildren) {
    return (
      <div className="space-y-1">
        <div
          className="flex items-center gap-2 p-1 rounded-md hover:bg-muted"
        >
          <div onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-1 cursor-pointer flex-1">
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </div>
           {multiple && (
            <Checkbox
              checked={isSelected}
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(node.value);
              }}
            />
          )}
          <span className={cn('flex-1 cursor-pointer', !multiple && isSelected && "font-bold")} onClick={(e) => { if(!multiple) { e.stopPropagation(); handleSelect(node.value); }}}>
            {node.title}
          </span>
        </div>
        {isOpen && <div className="pl-6 space-y-1">{node.children?.map((child) => <TreeSelectNode key={child.value} node={child} />)}</div>}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 p-1 rounded-md hover:bg-muted cursor-pointer" onClick={onSelect} onKeyDown={(e) => e.key === 'Enter' && onSelect(e)}>
      {multiple && <div className="w-4"></div>}
      {multiple && <Checkbox checked={isSelected} />}
      <span className={cn('flex-1', !multiple && isSelected && "font-bold")}>{node.title}</span>
    </div>
  );
};

export const TreeSelect: React.FC<TreeSelectProps> = ({
  treeData,
  value,
  onChange,
  multiple = false,
  placeholder = 'Select an option',
}) => {
  const [open, setOpen] = React.useState(false);
  const selected = React.useMemo(() => (value ? (Array.isArray(value) ? value : [value]) : []), [value]);

  const handleSelect = (selectedValue: string) => {
    if (multiple) {
      const newSelected = selected.includes(selectedValue)
        ? selected.filter((v) => v !== selectedValue)
        : [...selected, selectedValue];
      onChange(newSelected);
    } else {
      onChange(selectedValue);
      setOpen(false);
    }
  };

  const findNode = React.useCallback((nodes: TreeNode[], val: string): TreeNode | null => {
    for (const node of nodes) {
      if (node.value === val) return node;
      if (node.children) {
        const found = findNode(node.children, val);
        if (found) return found;
      }
    }
    return null;
  }, []);

  const selectedItems = React.useMemo(() => {
    return selected.map(val => findNode(treeData, val)).filter(Boolean) as TreeNode[];
  }, [selected, treeData, findNode]);

  const onClear = (e: React.MouseEvent<HTMLButtonElement>, val?: string) => {
    e.stopPropagation();
    if (multiple) {
      onChange(selected.filter(v => v !== val));
    } else {
      onChange(undefined);
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          role="combobox"
          aria-expanded={open}
          className="w-full flex justify-between items-center h-auto min-h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
        >
          <div className="flex flex-wrap items-center gap-1 flex-1">
            {!multiple && selectedItems.length > 0 ? (
              <span>{selectedItems[0].title}</span>
            ) : multiple && selectedItems.length > 0 ? (
              selectedItems.map((item) => (
                <Badge key={item.value} variant="secondary" className="gap-1.5">
                  {item.title}
                  <button onClick={(e) => onClear(e, item.value)} className="focus:ring-ring focus:ring-offset-2 rounded-full outline-none">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
          <div className="flex items-center">
            {selected.length > 0 &&
              <button onClick={(e) => onClear(e)} className="mx-2 focus:ring-ring focus:ring-offset-2 rounded-full outline-none">
                <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </button>
            }
             <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <TreeSelectContext.Provider value={{ multiple, selected, handleSelect }}>
          <ScrollArea className="max-h-72">
            <div className="p-2 space-y-1">
              {treeData.map((node) => (
                <TreeSelectNode key={node.value} node={node} />
              ))}
            </div>
          </ScrollArea>
        </TreeSelectContext.Provider>
      </PopoverContent>
    </Popover>
  );
};
