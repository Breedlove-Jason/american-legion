import { Container, Row, Col } from 'react-bootstrap';
import {
  NewsWrapper,
  NewsTitle,
  NewsItem,
  NewsDate,
  NewsDescription,
} from './News.styles';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'American Legion Celebrates Veterans Day',
      date: 'November 11, 2023',
      description:
        'Join us as we honor all veterans at our special Veterans Day event. There will be speeches, music, and activities to celebrate those who have served our country.',
    },
    {
      id: 2,
      title: 'Scholarship Applications Open for 2024',
      date: 'October 15, 2023',
      description:
        "We are now accepting scholarship applications for the 2024 academic year. Apply now and take advantage of the opportunities offered to our members' families.",
    },
    {
      id: 3,
      title: 'New Sponsorship Program Launched',
      date: 'September 30, 2023',
      description:
        'The American Legion has launched a new sponsorship program to help support our veterans and local community. Learn how you can contribute and make a difference.',
    },
  ];

  return (
    <Container className="mt-5">
      <NewsWrapper>
        <NewsTitle>Latest News</NewsTitle>
        <Row>
          {newsArticles.map((article) => (
            <Col key={article.id} md={12} className="mb-4">
              <NewsItem>
                <h3>{article.title}</h3>
                <NewsDate>{article.date}</NewsDate>
                <NewsDescription>{article.description}</NewsDescription>
              </NewsItem>
            </Col>
          ))}
        </Row>
      </NewsWrapper>
    </Container>
  );
};

export default News;
