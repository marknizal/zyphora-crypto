import { data } from "./data";

import SectionTitle from "../../components/common/section-title";
import * as S from "./styles";

const columns = [
  {
    title: "Cryptocurrency",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <S.Crypto>
        <S.CoinLogo src={record.logo} alt={record.symbol} loading="lazy" />

        <div className="info">
          <p className="name">{text}</p>
          <small className="symbol">{record.symbol}</small>
        </div>
      </S.Crypto>
    ),
  },
  {
    title: "USD Price",
    dataIndex: "price",
    key: "price",
    render: (val) => `$${val.toLocaleString()}`,
  },
  {
    title: "1h % Change",
    dataIndex: "change1h",
    key: "change1h",
    render: (val) => <S.ChangeValue positive={val >= 0}>{val}%</S.ChangeValue>,
  },
  {
    title: "24h % Change",
    dataIndex: "change24h",
    key: "change24h",
    render: (val) => <S.ChangeValue positive={val >= 0}>{val}%</S.ChangeValue>,
  },
  {
    title: "7d % Change",
    dataIndex: "change7d",
    key: "change7d",
    render: (val) => <S.ChangeValue positive={val >= 0}>{val}%</S.ChangeValue>,
  },
];

const Market = () => {
  return (
    <S.Wrapper>
      <SectionTitle
        title="Crypto Market Live Price"
        subTitle="Marrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined true generator."
      />

      <S.TableWrapper>
        <S.Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
      </S.TableWrapper>
    </S.Wrapper>
  );
};

export default Market;
