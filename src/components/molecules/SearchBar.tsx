import React from 'react';
import { Input, Button, Space } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledSpace = styled(Space)`
  @media (max-width: 768px) {
    width: 100%;
    
    .ant-btn {
      width: 100%;
    }
  }
`;

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
  onFilter?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  onSearch,
  onFilter,
}) => {
  const handleSearch = (value: string) => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <SearchContainer>
      <Input.Search
        placeholder={placeholder}
        onSearch={handleSearch}
        style={{ flex: 1 }}
        enterButton={
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
        }
      />
      <StyledSpace>
        <Button
          icon={<FilterOutlined />}
          onClick={onFilter}
        >
          Filter
        </Button>
      </StyledSpace>
    </SearchContainer>
  );
};

export default SearchBar;
