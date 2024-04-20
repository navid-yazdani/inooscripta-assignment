import {Text, Avatar, Paper, Box, rem, Group, useMantineTheme} from "@mantine/core";
import {CarouselSlide, Carousel} from "@mantine/carousel";
import {useMediaQuery} from "@mantine/hooks";
import {comment} from "../../../utiles/services/type.ts";

const SurveyCommentsSlider = ({data}: { data: comment[] }) => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const Slides = () => {
        return (
            data.map((item) => (
                <CarouselSlide key={item.id}>
                    <Group align='start' justify='center'>
                        <Avatar
                            alt={item.name}
                            radius="xl"
                            mr={16}
                        />
                        <Box w={{xs: '100%', sm: 200}}>
                            <Text size="sm" fw={700}>{item.name}</Text>
                            <Text m={0} size="md">{item.description}</Text>
                        </Box>
                    </Group>
                </CarouselSlide>
            ))
        )
    }

    return (
        <Paper bg='gray.2' radius="md" p={8} onClick={(e) => e.preventDefault()}>
            <Carousel
                slideGap={{base: rem(2), sm: 'xl'}}
                align="center"
                slidesToScroll={1}
                draggable={mobile}
                withControls={!mobile}
            >
                <Slides/>
            </Carousel>
        </Paper>
    )
}

export default SurveyCommentsSlider;