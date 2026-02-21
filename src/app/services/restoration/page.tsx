import { Metadata } from 'next';
import RestorationClient from './RestorationClient';

export const metadata: Metadata = {
    title: 'مقاول ترميم وتشطيب مباني في جدة | ديار جدة',
    description: 'خدمات ترميم وصيانة المباني والفلل بجدة. تشطيبات داخلية وخارجية احترافية، معالجة التشققات، وتجديد الواجهات بأعلى معايير الجودة وأفضل الأسعار.',
};

export default function RestorationPage() {
    return <RestorationClient />;
}
