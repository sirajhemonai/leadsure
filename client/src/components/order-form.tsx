import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertOrderSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";

const orderFormSchema = insertOrderSchema.extend({
  paymentMethod: z.enum(["wise", "binance", "bank"]),
});

type OrderFormData = z.infer<typeof orderFormSchema>;

export default function OrderForm() {
  const { toast } = useToast();
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
  });

  const createOrderMutation = useMutation({
    mutationFn: async (data: OrderFormData) => {
      const response = await apiRequest("POST", "/api/orders", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Order Submitted Successfully!",
        description: "Thank you for your order! We will contact you on WhatsApp to collect payment and deliver your leads within a few hours.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit order. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: OrderFormData) => {
    createOrderMutation.mutate(data);
  };

  const calculatePrice = (leads: number) => {
    return Math.max(1, Math.ceil(leads / 1000)) * 5;
  };

  const numberOfLeads = watch("numberOfLeads") || 1000;

  return (
    <section id="order" className="py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-8">
            <h2 className="text-2xl font-bold text-neutral mb-4 text-center">Place Your Order</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <i className="fas fa-info-circle text-blue-600 mr-2"></i>
                <p className="text-blue-800 text-sm">
                  <strong>Payment Process:</strong> After submitting your order, we'll contact you on WhatsApp to collect payment using your preferred method.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    {...register("fullName")}
                    className="mt-2"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="mt-2"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="whatsappNumber">WhatsApp Number *</Label>
                <Input
                  id="whatsappNumber"
                  type="tel"
                  {...register("whatsappNumber")}
                  className="mt-2"
                />
                {errors.whatsappNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="apolloFilterLink">Apollo Filter Link *</Label>
                <Input
                  id="apolloFilterLink"
                  type="url"
                  placeholder="https://app.apollo.io/..."
                  {...register("apolloFilterLink")}
                  className="mt-2"
                />
                <p className="text-sm text-gray-600 mt-1">Paste your Apollo search results URL with your filters applied</p>
                {errors.apolloFilterLink && (
                  <p className="text-red-500 text-sm mt-1">{errors.apolloFilterLink.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="numberOfLeads">Number of Leads *</Label>
                <Select onValueChange={(value) => {
                  const numericValue = value === "custom" ? 1000 : parseInt(value);
                  setValue("numberOfLeads", numericValue);
                  setValue("totalPrice", calculatePrice(numericValue));
                }}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select quantity..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000">1,000 leads - $5</SelectItem>
                    <SelectItem value="2000">2,000 leads - $10</SelectItem>
                    <SelectItem value="5000">5,000 leads - $25</SelectItem>
                    <SelectItem value="10000">10,000 leads - $50</SelectItem>
                    <SelectItem value="custom">Custom amount</SelectItem>
                  </SelectContent>
                </Select>
                {errors.numberOfLeads && (
                  <p className="text-red-500 text-sm mt-1">{errors.numberOfLeads.message}</p>
                )}
              </div>

              <div>
                <Label>Preferred Payment Method *</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[
                    { value: "wise", icon: "fas fa-university", label: "Wise" },
                    { value: "binance", icon: "fab fa-bitcoin", label: "Binance" },
                    { value: "bank", icon: "fas fa-building", label: "Bank Transfer" },
                  ].map((payment) => (
                    <label
                      key={payment.value}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                        selectedPayment === payment.value ? "border-primary bg-blue-50" : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        value={payment.value}
                        {...register("paymentMethod")}
                        onChange={() => setSelectedPayment(payment.value)}
                        className="sr-only"
                      />
                      <div className="w-full text-center">
                        <i className={`${payment.icon} text-primary mb-2`}></i>
                        <div className="text-sm font-medium">{payment.label}</div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="additionalRequirements">Additional Requirements (Optional)</Label>
                <Textarea
                  id="additionalRequirements"
                  rows={3}
                  placeholder="Any specific requirements or notes..."
                  {...register("additionalRequirements")}
                  className="mt-2"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary text-white py-4 text-lg font-semibold hover:bg-blue-600"
                disabled={createOrderMutation.isPending}
              >
                <i className="fas fa-credit-card mr-2"></i>
                {createOrderMutation.isPending ? "Processing..." : "Place Order"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
