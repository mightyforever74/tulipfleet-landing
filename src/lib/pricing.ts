export type PlanId = 'starter' | 'professional' | 'enterprise';

export interface Plan {
  id: PlanId;
  name: string;
  pricePerVehicle: number;
  priceNote?: string;
  vehicleRange: string;
  features: string[];
  popular?: boolean;
}

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    pricePerVehicle: 15,
    vehicleRange: '1–5',
    features: ['basic_tracking'],
  },
  {
    id: 'professional',
    name: 'Professional',
    pricePerVehicle: 25,
    vehicleRange: '6–20',
    features: ['basic_tracking', 'toll_routing'],
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    pricePerVehicle: 29,
    priceNote: 'volume_up_to_35',
    vehicleRange: '20+',
    features: ['basic_tracking', 'toll_routing', 'ze_zone', 'b2b_api'],
  },
];

export function recommendPlan(vehicles: number): PlanId {
  if (vehicles <= 5) return 'starter';
  if (vehicles <= 20) return 'professional';
  return 'enterprise';
}

export function monthlyTotal(vehicles: number, pricePerVehicle: number, yearly: boolean): number {
  const monthly = vehicles * pricePerVehicle;
  return yearly ? monthly * 0.9 : monthly;
}
