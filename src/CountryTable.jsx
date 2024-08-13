import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #e6e6fa;
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  background-color: #003580;
  color: #fff;
  font-weight: 700;
`;

const TableCell = styled.td`
  vertical-align: middle;
  color: #333;
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

const DeleteButton = styled.button`
  background-color: red;
  border: none;
  padding: 5px 10px;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

function CountryTable({ countries, handleDelete }) {
     return (
          <>
               {countries.length === 0 ? (<p> 아직 추가된 국가가 없습니다. 메탈을 추적하세요!</p>) : (<StyledTable>
                    <thead>
                         <tr>
                              <TableHeader>국가명</TableHeader>
                              <TableHeader>금메달</TableHeader>
                              <TableHeader>은메달</TableHeader>
                              <TableHeader>동메달</TableHeader>
                              <TableHeader>액션</TableHeader>
                         </tr>
                    </thead>
                    <tbody>
                         {countries.map((country) => (
                              <tr key={country.id}>
                                   <TableCell>{country.countryname}</TableCell>
                                   <TableCell>{country.goldMedalNumber}</TableCell>
                                   <TableCell>{country.silverMedalNumber}</TableCell>
                                   <TableCell>{country.bronzeMedalNumber}</TableCell>
                                   <TableCell>
                                        <DeleteButton onClick={() => handleDelete(country.id)}>
                                             삭제
                                        </DeleteButton>
                                   </TableCell>
                              </tr>
                         ))}
                    </tbody>
               </StyledTable>
               )}
          </>
     );
}

export default CountryTable;