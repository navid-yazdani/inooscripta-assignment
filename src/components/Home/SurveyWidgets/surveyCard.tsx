import {Card, Text, Group, Flex, ActionIcon, Tooltip} from '@mantine/core';
import {Link} from 'react-router-dom'
// import SurveyCommentsSlider from "./surveyCommentsSlider.tsx";
import {LikeIcon, DislikeIcon, ShareIcon, AddUserIcon, BookMarkIcon, SpeechBubbleIcon} from "../../../assets/index.tsx";
import SurveyStats from "../../UI/surveyStats.tsx";
import {survey} from "../../../utiles/services/type.ts";
import inquiry from "../../../utiles/services/modules/inquiry.ts";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

// const comments: Comment[] = [
//   {
//     id: 1,
//     name: 'Test',
//     text: 'Comment sample text',
//     image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png'
//   },
//   {
//     id: 2,
//     name: 'Test',
//     text: 'Comment sample text',
//     image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png'
//   },
//   {
//     id: 3,
//     name: 'Test',
//     text: 'Comment sample text',
//     image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png'
//   }
// ]
//
// export interface Comment {
//   id: number;
//   name: string;
//   text: string;
//   image: string;
// }

const SurveyCard = ({data, updateList}: { data: survey, updateList?: () => void }) => {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setIsBookmarked(!!data.isBookmarked)
  }, [data.isBookmarked]);

  const selectBookmark = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();
    inquiry.addBookmark({
      referenceObjectId: '1',
      referenceId: data.id
    }).then(res => {
      if (res.result && updateList) updateList()
    }).finally(() => setLoading(false))
  }

  const removeBookmark = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    e.preventDefault();
    inquiry.deleteBookmark({
      referenceObjectId: '1',
      referenceId: data.id
    }).then(res => {
      if (res.result && updateList) updateList();
    }).finally(() => setLoading(false))
  }

  return (
    <Link to={`/${data.id}`} style={{textDecoration: 'none'}}>
      <Card shadow="sm" padding="md" radius="md" withBorder w={{base: '100%', sm: '400px'}}>
        <SurveyStats data={data}/>
        <Flex align='center' justify='space-between'>
          <Group>
            <Tooltip label="Tooltip">
              <ActionIcon size="md" color='gray.3' onClick={(event) => event.preventDefault()}>
                <SpeechBubbleIcon/>
              </ActionIcon>
            </Tooltip>

            <Tooltip label="Tooltip">
              <ActionIcon size="md" color='gray.3' onClick={(event) => event.preventDefault()}>
                <ShareIcon/>
              </ActionIcon>
            </Tooltip>

            <Tooltip label="Tooltip">
              <ActionIcon size="md" color='gray.3' onClick={(event) => event.preventDefault()}>
                <LikeIcon/>
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Tooltip">
              <ActionIcon size="md" color='gray.3' onClick={(event) => event.preventDefault()}>
                <DislikeIcon/>
              </ActionIcon>
            </Tooltip>
          </Group>

          <Group>
            <Tooltip label="Tooltip">
              <ActionIcon size="md" color='gray.3' onClick={(event) => event.preventDefault()}>
                <AddUserIcon/>
              </ActionIcon>
            </Tooltip>
            <Tooltip label={!isBookmarked ? t('survey:add_bookmark') : t('survey:remove_bookmark')}>
              <ActionIcon
                size="md"
                color='gray.3'
                loading={loading}
                onClick={(e) => isBookmarked ? removeBookmark(e) : selectBookmark(e)}
              >
                <BookMarkIcon/>
              </ActionIcon>
            </Tooltip>
          </Group>
        </Flex>

        <Text my={16} fw={500}>{data.name}</Text>

        {/*<SurveyCommentsSlider data={comments}/>*/}
      </Card>
    </Link>
  );
}

export default SurveyCard;
