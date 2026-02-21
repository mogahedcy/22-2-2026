import { Metadata } from 'next';
import PergolasClient from './PergolasClient';

export const metadata: Metadata = {
    title: 'تركيب برجولات حدائق خشبية وحديد بجدة | ديار جدة',
    description: 'أضف لمسة جمالية لحديقتك مع أفضل تصاميم البرجولات الخشبية والحديدية في جدة. تركيب جلسات خارجية راقية توفر ظلاً ممتازاً ومقاومة للعوامل الجوية.',
};

export default function PergolasPage() {
    return <PergolasClient />;
}
