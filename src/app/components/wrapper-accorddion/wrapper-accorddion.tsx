import { Accordion, AccordionItem, AccordionItemIndicatorProps } from '@heroui/react';
import { ReactNode } from 'react';

interface PropsAccordion {
    label: string;
    title: ReactNode;
    subtitle?: ReactNode;
    startContent?: ReactNode;
    content: ReactNode;
    indicator?: ReactNode | ((props: AccordionItemIndicatorProps) => ReactNode) | null;
}

type AppAccordion = Array<PropsAccordion>;

export default function AppAccordion({
    props,
    variant,
}: {
    props: AppAccordion;
    variant?: 'splitted' | 'light' | 'shadow' | 'bordered';
}) {
    return (
        <Accordion variant={variant}>
            {props.map((a, i) => (
                <AccordionItem
                    key={i}
                    aria-label={a.label}
                    title={a.title}
                    subtitle={a.subtitle}
                    startContent={a.startContent}
                    indicator={a.indicator}
                >
                    {a.content}
                </AccordionItem>
            ))}
        </Accordion>
    );
}
