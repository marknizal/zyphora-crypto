import styled from "@emotion/styled";
import { Table as AntTable } from "antd";
import { Container } from "../../components/shared";
import { color } from "../../styles";

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  color: ${color.white};
  padding: 5rem 1rem;
`;

export const TableWrapper = styled.div`
  overflow: auto;
  width: 100%;
  border-radius: 1rem;
`;

export const Table = styled(AntTable)`
  background: #212121;
  width: 100%;

  .ant-table {
    background: #212121;
    color: white;
  }

  .ant-table-container {
    border: none !important;
  }

  .ant-table-thead > tr > th {
    background: #2c2c2c;
    color: white;
    border-bottom: 1px solid #444;
    border-right: none !important;
    white-space: nowrap;
  }

  .ant-table-tbody > tr > td {
    background: #212121;
    color: white;
    border-bottom: 1px solid #333;
    border-right: none !important;
  }

  .ant-table-tbody > tr:hover > td {
    background: #333 !important;
  }
`;

export const Crypto = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .info {
    display: flex;
    flex-direction: column;
  }

  .name {
    white-space: nowrap;
  }

  .symbol {
    font-size: 0.8rem;
    color: #aaa;
  }
`;

export const CoinLogo = styled.img`
  width: 2.15rem;
  aspect-ratio: 1 / 1;
`;

export const ChangeValue = styled.span`
  color: ${({ positive }) => (positive ? "#9ACD32" : "#AAAAAA")};
`;
