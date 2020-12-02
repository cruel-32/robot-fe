import React, { memo } from 'react';
import styled from 'styled-components';

import GridBox from '@/components/atoms/GridBox';
import Text from '@/components/atoms/Text';
import FormFactory, { FormType } from '@/components/molecules/FormFactory';
import { gray, background } from '@/theme';

const MemoFormFactory = memo(FormFactory);
const MemoText = memo(Text);

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

export type { FormType };

export type FormGridProps = {
  data: Partial<Record<string, any>>;
  forms: Partial<Record<string, FormType>>;
  inputHandler: InputHandler;
};

const FormGrid: React.FC<FormGridProps> = (props) => {
  const { data, forms, inputHandler } = props;

  return (
    <form>
      <StyledContainer container direction="column">
        {Object.keys(forms).map((name: string) => {
          const form = forms[name];

          return (
            <GridBox item key={name}>
              <GridBox
                container
                className="row-grid"
                direction="row"
                justify="space-between"
              >
                <GridBox item className="left-grid">
                  <MemoText text={form?.label || ''} />
                </GridBox>
                <GridBox item className="right-grid">
                  <MemoFormFactory
                    value={data[name]}
                    name={name}
                    {...form}
                    inputHandler={inputHandler}
                  />
                </GridBox>
              </GridBox>
            </GridBox>
          );
        })}
      </StyledContainer>
    </form>
  );
};

export default FormGrid;
