import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FormComponent from "./FormComponent";
import CountryTable from "./CountryTable";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f4f4f9;
    color: black;
    margin: 0;
    padding: 0;
  }
`;
//f4f4f9
const Main = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

const MainContainer = styled.div`
  background-color: #fff;
  max-width: 1200px;
  min-width: 800px;
  padding: 20px;
  box-shadow: 0 4px 8px #0000001a;
  border-radius: 8px;
  color: black;
`;

const Heading = styled.h1`
  text-align: center;
  color: #003580;
  margin: 20px;
  font-size: 2rem;
`;

function App() {
  const [formData, setFormData] = useState({
    countryname: "",
    goldMedalNumber: 0,
    silverMedalNumber: 0,
    bronzeMedalNumber: 0,
  });
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let processedValue = value;

    if (name !== "countryname") {
      processedValue = Math.max(0, parseInt(value, 10) || 0).toString();
    }

    setFormData({
      ...formData,
      [name]: processedValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingCountry = countries.find(
      (country) =>
        country.countryname.toLowerCase() === formData.countryname.toLowerCase()
    );

    if (existingCountry) {
      alert("동일한 데이터가 있습니다!");
      return;
    }

    setCountries((prevCountries) => {
      const updatedCountries = [
        ...prevCountries,
        { ...formData, id: Date.now() },
      ];

      return updatedCountries.sort(
        (a, b) => b.goldMedalNumber - a.goldMedalNumber
      );
    });

    setFormData({
      countryname: "",
      goldMedalNumber: 0,
      silverMedalNumber: 0,
      bronzeMedalNumber: 0,
    });
  };

  const handleUpdate = () => {
    const existingCountry = countries.find(
      (country) =>
        country.countryname.toLowerCase() === formData.countryname.toLowerCase()
    );

    if (!existingCountry) {
      alert("업데이트할 국가가 없습니다. 먼저 국가를 추가하세요.");
      return;
    }

    setCountries((prevCountries) => {
      const updatedCountries = prevCountries.map((country) =>
        country.countryname === formData.countryname
          ? { ...country, ...formData }
          : country
      );

      return updatedCountries.sort(
        (a, b) => b.goldMedalNumber - a.goldMedalNumber
      );
    });
  };

  const handleDelete = (id) => {
    setCountries((prevCountries) =>
      prevCountries.filter((country) => country.id !== id)
    );
  };

  return (
    <>
      <GlobalStyle />
      <Main>
        <MainContainer>
          <Heading>2024 파리 올림픽</Heading>
          <FormComponent
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleUpdate={handleUpdate}
          />
          <CountryTable countries={countries} handleDelete={handleDelete} />
        </MainContainer>
      </Main>
    </>
  );
}

export default App;
