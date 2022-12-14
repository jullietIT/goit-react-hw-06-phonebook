// import React, { Component } from 'react';
import React from 'react';
import { FilterWrapper } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setStatusFilter(e.target.value)); //передаємо значення у фільтрі
  };
  return (
    <FilterWrapper>
      <label>
        <input type="text" onChange={handleChange} />
      </label>
    </FilterWrapper>
  );
};

export default Filter;
