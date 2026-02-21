import { Metadata } from 'next';
import TentsClient from './TentsClient';

export const metadata: Metadata = {
    title: 'تفصيل وتركيب خيام وبيوت شعر في جدة | ديار جدة',
    description: 'تصميم وتركيب بيوت شعر ملكية وعادية وخيام بأفضل الخامات في جدة. ديكورات تراثية وحديثة مقاومة للحرارة والمطر مع ضمان جودة التنفيذ.',
};

export default function TentsPage() {
    return <TentsClient />;
}
