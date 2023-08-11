interface RawDataEntry {
  _text?: string | number;
  _cdata?: string;
  _attributes?: {
    [key: string]: string;
  };
}
interface RawLawData {
  [key: string]: RawDataEntry;
}
interface RawLawDetailRes {
  PrecService?: RawLawData;
  법령?: RawLawData;
}

interface CommonConvertedElement<T> {
  _text: T;
  _cdata?: string;
}
interface ConvertedPrecElement {
  판례일련번호: CommonConvertedElement<number>;
}
interface ConvertedLawElement {
  법령ID: CommonConvertedElement<number>;
}
interface LawListApiResponse {
  PrecSearch?: {
    totalCnt: CommonConvertedElement<number>;
    prec: ConvertedPrecElement[] | ConvertedPrecElement;
  };
  LawSearch?: {
    totalCnt: CommonConvertedElement<number>;
    law: ConvertedLawElement[] | ConvertedLawElement;
  };
}

interface TransformedCleanDataEntry {
  [key: string]: string | number | TransformedCleanDataEntry[] | TransformedCleanDataEntry;
}

interface Lawitem {
  목번호: string;
  목내용: string;
}
interface LawSubparagraph {
  호번호: string;
  호내용: string;
  목?: Lawitem | Lawitem[];
}
interface LawParagraph {
  항번호: string;
  항내용: string;
  호?: LawSubparagraph | LawSubparagraph[];
}
interface LawArticle {
  _attributes?: {
    조문키: string;
  };
  조문키: string;
  조문번호: number;
  조문여부: string;
  조문제목?: string;
  조문시행일자: number;
  조문내용: string;
  항?: LawParagraph | LawParagraph[];
  조문참고자료?: string | string[];
}
interface LawAddendum {
  부칙키: string;
  부칙공포일자: number;
  부칙공포번호: number;
  부칙내용: string[];
}
interface LawDetailData {
  기본정보: {
    법령명_한글?: string;
    법령명: string;
    시행일자: number;
  };
  조문: {
    조문단위: LawArticle | LawArticle[];
  };
  부칙: {
    부칙단위: LawAddendum | LawAddendum[];
  };
}

interface PrecDetailData {
  판례정보일련번호: number;
  사건번호: string;
  사건종류명: string;
  판결유형: string;
  선고: string;
  법원명: string;
  선고일자: string;
  사건명: string;
  판례내용: string;
}

type TransformedCleanLawList = (TransformedCleanDataEntry | TransformedCleanDataEntry[])[];

export {
  LawListApiResponse,
  RawLawData,
  RawLawDetailRes,
  RawDataEntry,
  TransformedCleanDataEntry,
  PrecDetailData,
  TransformedCleanLawList,
  LawDetailData,
  LawArticle,
};
