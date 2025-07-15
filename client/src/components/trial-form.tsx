import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertTrialSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";

type TrialFormData = z.infer<typeof insertTrialSchema>;

export default function TrialForm() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TrialFormData>({
    resolver: zodResolver(insertTrialSchema),
  });

  const createTrialMutation = useMutation({
    mutationFn: async (data: TrialFormData) => {
      const response = await apiRequest("POST", "/api/trials", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Trial Request Submitted!",
        description: "Thank you for requesting a free trial! We will contact you on WhatsApp and send you 100 sample leads within a few hours.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit trial request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: TrialFormData) => {
    createTrialMutation.mutate(data);
  };

  return (
    <section id="trial" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-green-50">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <i className="fas fa-gift text-secondary text-4xl mb-4"></i>
              <h2 className="text-2xl font-bold text-neutral mb-4">Try Before You Buy</h2>
              <p className="text-lg text-gray-600">Get 100 free leads to test our service quality</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-4">
                <p className="text-green-800 text-sm">
                  <i className="fab fa-whatsapp text-green-600 mr-2"></i>
                  We'll contact you on WhatsApp to deliver your free trial leads
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="trialFullName">Full Name *</Label>
                  <Input
                    id="trialFullName"
                    {...register("fullName")}
                    className="mt-2 focus:ring-secondary"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="trialEmail">Email Address *</Label>
                  <Input
                    id="trialEmail"
                    type="email"
                    {...register("email")}
                    className="mt-2 focus:ring-secondary"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="trialWhatsappNumber">WhatsApp Number *</Label>
                <Input
                  id="trialWhatsappNumber"
                  type="tel"
                  {...register("whatsappNumber")}
                  className="mt-2 focus:ring-secondary"
                />
                {errors.whatsappNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="trialApolloFilterLink">Apollo Filter Link *</Label>
                <Input
                  id="trialApolloFilterLink"
                  type="url"
                  placeholder="https://app.apollo.io/..."
                  {...register("apolloFilterLink")}
                  className="mt-2 focus:ring-secondary"
                />
                <p className="text-sm text-gray-600 mt-1">We'll extract 100 leads from your Apollo filter as a free sample</p>
                {errors.apolloFilterLink && (
                  <p className="text-red-500 text-sm mt-1">{errors.apolloFilterLink.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="businessType">What's your business? *</Label>
                <Input
                  id="businessType"
                  placeholder="e.g., SaaS company, Digital agency, etc."
                  {...register("businessType")}
                  className="mt-2 focus:ring-secondary"
                />
                {errors.businessType && (
                  <p className="text-red-500 text-sm mt-1">{errors.businessType.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-secondary text-white py-4 text-lg font-semibold hover:bg-green-600"
                disabled={createTrialMutation.isPending}
              >
                <i className="fas fa-download mr-2"></i>
                {createTrialMutation.isPending ? "Processing..." : "Get My Free 100 Leads"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
