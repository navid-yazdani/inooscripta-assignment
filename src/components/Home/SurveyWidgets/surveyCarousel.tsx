import {Carousel, CarouselSlide} from '@mantine/carousel';
import {useMediaQuery} from '@mantine/hooks';
import {rem, Skeleton, useMantineTheme} from '@mantine/core';
import SurveyCard from "./surveyCard.tsx";
import {survey} from "../../../utiles/services/type.ts";

const SurveyCarousel = ({data, loading, update}: {data: survey[], loading: boolean, update?: () => void}) => {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    const Slides = () => {
        return (
            data.map((item) => (
                <CarouselSlide key={item.id}>
                    <Skeleton visible={loading} mb={32}>
                        <SurveyCard data={item} updateList={update}/>
                    </Skeleton>
                </CarouselSlide>
            ))
        )
    }

    return (
        <Carousel
            slideSize={{base: '100%', sm: '20%'}}
            slideGap={{base: rem(2), sm: 'xl'}}
            align="start"
            slidesToScroll={mobile ? 1 : 2}
            draggable={false}
            loop={true}
        >
            <Slides/>
        </Carousel>
    );
}

export default SurveyCarousel;