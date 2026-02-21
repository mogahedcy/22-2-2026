import { Metadata } from 'next';
import PanelClient from './PanelClient';

export const metadata: Metadata = {
    title: 'تركيب غرف ومظلات ساندوتش بانل بجدة | ديار جدة',
    description: 'متخصصون في توريد وتركيب ألواح الساندوتش بانل في جدة للهناجر والمستودعات والغرف. عزل حراري ومائي فائق الجودة بأسعار تنافسية وتنفيذ سريع.',
};

export default function PanelPage() {
    return <PanelClient />;
}
