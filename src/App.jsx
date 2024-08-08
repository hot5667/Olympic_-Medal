import "./main.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    countryname: "",
    goldMedalNumber: 0,
    silverMedalNumber: 0,
    bronzeMedalNumber: 0,
  });
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCountries((prevCountries) => {
      const existingCountry = prevCountries.find(
        (country) => country.countryname === formData.countryname
      );

      if (existingCountry) {
        return prevCountries
          .map((country) =>
            country.countryname === formData.countryname
              ? { ...country, ...formData }
              : country
          )
          .sort((a, b) => b.goldMedalNumber - a.goldMedalNumber);
      } else {
        const updatedCountries = [
          ...prevCountries,
          { ...formData, id: Date.now() },
        ];

        return updatedCountries.sort(
          (a, b) => b.goldMedalNumber - a.goldMedalNumber
        );
      }
    });

    setFormData({
      countryname: "",
      goldMedalNumber: 0,
      silverMedalNumber: 0,
      bronzeMedalNumber: 0,
    });
  };

  const handleUpdate = () => {
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

    setFormData({
      countryname: "",
      goldMedalNumber: 0,
      silverMedalNumber: 0,
      bronzeMedalNumber: 0,
    });
  };

  return (
    <>
      <main>
        <div className="maincontainer">
          <h1>2024 파리 올림픽</h1>
          <form className="input-group" onSubmit={handleSubmit}>
            <div className="input-filed">
              <label>국가명</label>
              <input
                type="text"
                name="countryname"
                id="countryname"
                placeholder="국가 입력"
                value={formData.countryname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-filed">
              <label>금메달</label>
              <input
                type="number"
                name="goldMedalNumber"
                id="goldMedalNumber"
                placeholder="금메달 갯수를 입력해주세요"
                value={formData.goldMedalNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-filed">
              <label>은메달</label>
              <input
                type="number"
                name="silverMedalNumber"
                id="silvergoldMedalNumber"
                placeholder="은메달 갯수를 입력해주세요"
                value={formData.silverMedalNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-filed">
              <label>동메달</label>
              <input
                type="number"
                name="bronzeMedalNumber"
                id="bronzegoldMedalNumber"
                placeholder="동메달 갯수를 입력해주세요"
                value={formData.bronzeMedalNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-group">
              <button type="submit">국가 추가</button>
              <button type="button" onClick={handleUpdate}>업데이트</button>
            </div>
          </form>

          <div>
            {countries.length === 0 ? (
              <p>아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>
            ) : (
              <table className="country-table">
                <thead>
                  <tr>
                    <th>국가명</th>
                    <th>금메달</th>
                    <th>은메달</th>
                    <th>동메달</th>
                    <th>액션</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((country) => (
                    <tr key={country.id}>
                      <td>{country.countryname}</td>
                      <td>{country.goldMedalNumber}</td>
                      <td>{country.silverMedalNumber}</td>
                      <td>{country.bronzeMedalNumber}</td>
                      <td>
                        <button>삭제</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;