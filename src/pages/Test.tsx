import React, { useState } from "react";
import DataTable from "react-data-table-component";
import styled from "styled-components";



//Sorry for deleting your test code😢

interface Movie {
  Title: string;
  Director: string;
  Year: string;
}

const columns = [
  {
    name: 'Title',
    selector: (row: Movie) => row.Title,
    sortable: true,
    filterable: true,
  },
  {
    name: 'Director',
    selector: (row: Movie) => row.Director,
    sortable: true,
    filterable: true,
  },
  {
    name: 'Year',
    selector: (row: Movie) => row.Year,
    sortable: true,
    filterable: true,
  },
];

const sample: Movie = {
  Title: "Taonga Nambela",
  Director: "Development & Integration",
  Year: "1660",
};

const data: Movie[] = [];
for (let i = 0; i < 50; i++) {
  let t = { ...sample, no: i + 1 };
  data.push(t);
}

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Test = () => {
  const [filteredData, setFilteredData] = useState<Movie[]>(data);
  const [inputValue, setInputValue] = useState("");

  const handleFilter = (text: string, record: Movie) => {
    const lowerCaseText = text.toLowerCase();
    return (
      record.Title.toLowerCase().includes(lowerCaseText) ||
      record.Director.toLowerCase().includes(lowerCaseText) ||
      record.Year.toLowerCase().includes(lowerCaseText)
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = data.filter((entry: Movie) => handleFilter(value, entry));
    setFilteredData(filtered);
  };

  const handleClearInput = () => {
    setInputValue("");
    setFilteredData(data);
  };

  return (
    <div>
      <InputContainer>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search..."
        />
        {inputValue && (
          <ClearButton onClick={handleClearInput}>
            <span>&times;</span>
          </ClearButton>
        )}
      </InputContainer>
      <DataTable  columns={columns} data={filteredData} pagination />
    </div>
  );
};

export default Test;
