/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import GridBox from '@/components/atoms/GridBox';
import Text from '@/components/atoms/Text';

import { gray, background } from '@/theme';

const StyledContainer = styled(GridBox)`
  flex-wrap: nowrap;
  border-top: 1px solid ${gray.light};
  border-left: 1px solid ${gray.light};
  border-right: 1px solid ${gray.light};
  .row-grid {
    border-bottom: 1px solid ${gray.light};
  }
  .left-grid {
    flex: none;
    background: ${background.default};
    padding: 10px;
    min-width: 100px;
  }
  .right-grid {
    flex: 1;
    margin-left: auto;
    padding: 10px;
  }
`;

export type DetailGridProps = {
  detailColumns: DetailColumn[];
  data?: any;
};

export type DetailColumn = {
  field: string;
  label: string;
  type?: 'string' | 'array';
};

const DetailGrid: React.FC<DetailGridProps> = (props) => {
  const { detailColumns, data } = props;

  return (
    <StyledContainer container direction="column">
      {detailColumns.map((detail) => {
        const { field, label, type } = detail;

        return (
          <GridBox item key={detail.field}>
            <GridBox
              container
              className="row-grid"
              direction="row"
              justify="space-between"
            >
              <GridBox item className="left-grid">
                <Text>{label}</Text>
              </GridBox>
              <GridBox item className="right-grid">
                <Text>
                  {type !== 'string' && Array.isArray(data?.[field])
                    ? data?.[field].join(' ')
                    : data?.[field]}
                </Text>
              </GridBox>
            </GridBox>
          </GridBox>
        );
      })}
    </StyledContainer>
  );
};

export default DetailGrid;
