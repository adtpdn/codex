
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Package, Languages, X, Calendar as CalendarIcon, MapPin, Pencil, ChevronDown, Trash2, Info, AlertTriangle, Plus, Copy, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const OrderItem = ({ item, onRemove }: { item: any; onRemove: (id: number) => void }) => {
  return (
    <AccordionItem value={`item-${item.id}`} className="border-b-0">
      <Card className="mb-4">
        <AccordionTrigger className="p-4 hover:no-underline">
          <div className="flex items-center gap-4 w-full">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-green-600 border-green-600">{item.id}</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">{item.status}</Badge>
              {item.seasonal && <Badge variant="secondary" className="bg-blue-100 text-blue-800">Seasonal</Badge>}
            </div>
            <div className="flex-1 text-right font-bold">${item.total.toFixed(2)}</div>
            <Button
              asChild
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(item.id);
              }}
              className="ml-2"
            >
              <span>
                <Trash2 className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor={`product-${item.id}`}>Agricultural Product*</Label>
              <Select defaultValue={item.product}>
                <SelectTrigger id={`product-${item.id}`}>
                  <SelectValue placeholder="Select product..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Soybeans - Premium Grade">Soybeans - Premium Grade</SelectItem>
                  <SelectItem value="Corn - Grade A">Corn - Grade A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor={`quantity-${item.id}`}>Planned Quantity*</Label>
              <div className="flex gap-2">
                <Input id={`quantity-${item.id}`} type="number" defaultValue={item.quantity} className="flex-1" />
                <Select defaultValue={item.unit}>
                  <SelectTrigger className="w-[80px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Kg">Kg</SelectItem>
                    <SelectItem value="Ton">Ton</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
                <Label htmlFor={`unit-price-${item.id}`}>Unit Price ($)</Label>
                <Input id={`unit-price-${item.id}`} type="number" defaultValue={item.unitPrice.toFixed(2)} disabled />
            </div>
            <div>
                <Label htmlFor={`total-amount-${item.id}`}>Total Amount</Label>
                <Input id={`total-amount-${item.id}`} defaultValue={`$${item.total.toFixed(2)}`} disabled />
            </div>
            <div className="md:col-span-2">
                <Label htmlFor={`remarks-${item.id}`}>Order Remarks</Label>
                <Textarea id={`remarks-${item.id}`} defaultValue={item.remarks} />
            </div>
          </div>
          <Alert className="mt-6 bg-blue-50 border-blue-200">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-800">Product Information</AlertTitle>
            <AlertDescription className="text-blue-700">
              Category: {item.product} <br/>
              <span className="flex items-center gap-1 mt-1">
                <AlertTriangle className="h-4 w-4 text-orange-500" /> Seasonal product - timing sensitive
              </span>
            </AlertDescription>
          </Alert>
          <div className="mt-4">
            <Label htmlFor={`cfs-${item.id}`}>Container Freight Station (CFS) Instructions</Label>
            <Textarea id={`cfs-${item.id}`} placeholder="Enter special handling instructions, storage requirements, or logistics notes..." />
          </div>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
};


export const ModalShowcase = () => {
    const [date, setDate] = useState<Date>();
    const [items, setItems] = useState([
        { id: 1, status: 'Complete', seasonal: true, product: 'Soybeans - Premium Grade', quantity: 1000, unit: 'Kg', unitPrice: 2.50, total: 2500, remarks: 'Premium grade' },
        { id: 2, status: 'Complete', seasonal: false, product: 'Corn - Grade A', quantity: 5000, unit: 'Kg', unitPrice: 1.80, total: 9000, remarks: 'Standard grade' },
    ]);
    const [openAccordionItems, setOpenAccordionItems] = useState(['item-1']);

    const handleAddItem = () => {
        const newId = items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1;
        setItems([...items, { id: newId, status: 'Pending', seasonal: false, product: '', quantity: 0, unit: 'Kg', unitPrice: 0, total: 0, remarks: '' }]);
    };
    
    const handleRemoveItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    const totalAmount = items.reduce((sum, item) => sum + item.total, 0);

  return (
    <Card className="w-full max-w-5xl mx-auto shadow-2xl">
      <CardHeader className="p-4 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Package className="h-6 w-6 text-green-700" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Create New Agriculture Order</h2>
              <p className="text-sm text-muted-foreground">Crop supplies, equipment & logistics management</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon"><Languages className="w-5 h-5" /></Button>
            <Select defaultValue="english">
              <SelectTrigger className="w-[100px] border-0 !ring-0 focus:!ring-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon"><X className="w-5 h-5" /></Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 bg-gray-50/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
                <Label>Order Number</Label>
                <Input value="Auto-generated on save" disabled />
            </div>
            <div>
                <Label>Customer*</Label>
                 <Select>
                    <SelectTrigger><SelectValue placeholder="Please select" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="customer1">Customer A</SelectItem>
                        <SelectItem value="customer2">Customer B</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label>Planned Delivery Date*</Label>
                <Popover>
                    <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>mm/dd/yy</span>}
                    </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                </Popover>
            </div>
            <div>
                <Label>Delivery Purpose*</Label>
                <Select>
                    <SelectTrigger><SelectValue placeholder="Please select delivery purpose" /></SelectTrigger>
                    <SelectContent>
                        <SelectItem value="purpose1">Resale</SelectItem>
                        <SelectItem value="purpose2">Processing</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label>Priority Level</Label>
                <Select defaultValue="normal">
                    <SelectTrigger>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="normal">Normal Priority</SelectItem>
                        <SelectItem value="high">High Priority</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label>Farm Location*</Label>
                <Select>
                    <SelectTrigger>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <SelectValue placeholder="Select farm location..." />
                        </div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="loc1">West Farm</SelectItem>
                        <SelectItem value="loc2">East Farm</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>

        <Alert className="bg-blue-100 border-blue-200 text-blue-800 mb-4">
          <Info className="h-4 w-4" />
          <div className="flex justify-between items-center w-full">
            <AlertDescription>
                Click the expand button on each item to access pricing and remarks
            </AlertDescription>
            <div>
                <Button variant="link" className="text-blue-800" onClick={() => setOpenAccordionItems(items.map(i => `item-${i.id}`))}>Expand All</Button>
                <Button variant="link" className="text-blue-800" onClick={() => setOpenAccordionItems([])}>Collapse All</Button>
            </div>
          </div>
        </Alert>

        <Accordion type="multiple" value={openAccordionItems} onValueChange={setOpenAccordionItems}>
            {items.map(item => (
                <OrderItem key={item.id} item={item} onRemove={handleRemoveItem} />
            ))}
        </Accordion>

        <Button variant="outline" onClick={handleAddItem} className="mt-4 w-full">
            <Plus className="mr-2 h-4 w-4" /> Add Item
        </Button>
        
        <div className="mt-6 pt-6 border-t flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Items: {items.length}</span> &nbsp;|&nbsp;
                Completed: {items.filter(i => i.status === 'Complete').length} &nbsp;|&nbsp;
                Priority: Normal &nbsp;|&nbsp;
                <span className="font-semibold text-foreground">Total: ${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost"><Copy className="mr-2 h-4 w-4" /> Copy Template</Button>
                <Button variant="ghost"><Upload className="mr-2 h-4 w-4" /> Import CSV</Button>
                <Button variant="outline">Cancel</Button>
                <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="mr-2 h-4 w-4" /> Create Order
                </Button>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};
