import {
    Text,
    Card,
    SimpleGrid,
    Skeleton, Title,
} from '@mantine/core';
import {useEffect, useState} from "react";

const mockdata = [
    {
        title: 'Extreme performance',
        description:
            'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    },
    {
        title: 'Privacy focused',
        description:
            'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    },
    {
        title: 'No third parties',
        description:
            'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    },
];

const MetroCards = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, []);
    const features = mockdata.map((feature) => (
        <Skeleton key={feature.title} visible={loading}>
            <Card shadow="sm" radius="md" padding="md" h='100%' className='hover-effect'>
                <Text fz="lg" fw={500} mt="md">
                    {feature.title}
                </Text>
                <Text fz="sm" c="dimmed" mt="sm">
                    {feature.description}
                </Text>
            </Card>
        </Skeleton>
    ));

    return (
        <>
            <Title order={3} mb='xs' style={{ textAlign: 'center' }}>Create New Surveys</Title>
            <Title order={5} mb='md' style={{ textAlign: 'center' }}>Sample subtitle text for this widget</Title>
            <SimpleGrid cols={{base: 1, md: 3}} mb={32}>
                {features}
            </SimpleGrid>
        </>
    )
}

export default MetroCards;