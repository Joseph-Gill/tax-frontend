import styled from 'styled-components/macro'


export const CommentTable = styled.table`
  width: 100%;
  border: 1px solid ${props => props.theme.grayFour};
  border-collapse: collapse;
`

export const TableTitleRow = styled.tr`
  height: 48px;
  border: 1px solid ${props => props.theme.grayFour};
`

export const TableDataRow = styled.tr`
  height: 77px;
  border: 1px solid ${props => props.theme.grayFour};
`

export const TableHeader = styled.th`
  border-right: 1px solid ${props => props.theme.grayFour};
  font-family: ${props => props.theme.nunitoFontFamily};
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.grayTwo};
  padding-top: 24px;
`

export const TableData = styled.td`
  border-right: 1px solid ${props => props.theme.grayFour};
  font-family: ${props => props.theme.nunitoFontFamily};
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.black};
  padding-left: 16px;
`
