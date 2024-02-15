import  { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { markets, categories } from './data';
import styled from 'styled-components';

const App = () => {
  const [selectedMarket, setSelectedMarket] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item || !selectedMarket || !selectedCategory) return;
    setList([...list, { market: selectedMarket, category: selectedCategory, item }]);
    setItem('');
  };

  return (
    <ContainerStyled>
      <h1>Alışverişte Alınacaklar Listesi</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="formMarketSelect">
              <Form.Label>Market</Form.Label>
              <Form.Control as="select" value={selectedMarket} onChange={e => setSelectedMarket(e.target.value)}>
                <option>Market seçiniz</option>
                {markets.map((market) => (
                  <option key={market.id} value={market.name}>{market.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formCategorySelect">
              <Form.Label>Kategori</Form.Label>
              <Form.Control as="select" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                <option>Kategori seçiniz</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>{category.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formItemInput">
              <Form.Label>Ürün</Form.Label>
              <Form.Control type="text" value={item} onChange={e => setItem(e.target.value)} placeholder="Ürün giriniz" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">Ekle</Button>
      </Form>
      <ListStyled>
        {list.map((item, index) => (
          <li key={index}>{item.market} - {item.category} - {item.item}</li>
        ))}
      </ListStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled(Container)`
  margin-top: 20px;
`;

const ListStyled = styled.ul`
  margin-top: 20px;
  list-style: none;
`;

export default App;
