export interface ProductItem {
    id: string;
    title: string;
    variant?: string;
    price: number;
    originalPrice: number;
    discountPercent: number;
    rating?: number;
    reviewCount?: number | string;
    locationCount?: number;
    isSoldOut?: boolean;
    isNew?: boolean;
    image: string;
    category?: string;
}

export interface FlashSaleItem {
    id: string;
    title: string;
    price: number;
    originalPrice: number;
    discountPercent: number;
    image: string;
}

export interface QuickCategoryItem {
    id: string;
    label: string;
    icon: string;
    badge?: string;
}

export interface PopularCategoryItem {
    id: string;
    title: string;
    image: string;
}

export interface ViralProductItem {
    id: string;
    title: string;
    image: string;
    views?: string;
}

export interface TrendingSearchItem {
    id: string;
    keyword: string;
    productCount: number;
    image: string;
}

export interface ArticleItem {
    id: string;
    title: string;
    description: string;
    image: string;
    date: string;
}

