export interface IDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface IMeta {
  barcode: string;
  qrCode: string;
  createdAt: string;
  updatedAt: string;
}

export interface IReview {
  reviewerName: string;
  reviewerEmail: string;
  rating: number;
  comment: string;
  date: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  minimumOrderQuantity: number;
  availabilityStatus: string;
  returnPolicy: string;
  shippingInformation: string;
  warrantyInformation: string;
  sku: string;
  weight: number;
  category: string;
  brand: string;
  thumbnail: string;
  images: any[];
  tags: string[];
  dimensions: IDimensions;
  meta: IMeta;
  reviews: IReview[];
}
