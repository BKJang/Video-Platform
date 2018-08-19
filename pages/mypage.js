import React from "react"
import PageTemplate from "components/PageTemplate/PageTemplate";

export default () => (
  <>
    <PageTemplate>
      <div className={'myPage container'}>
        <div className={'profileDiv'}>
          <div className={'profileDivTop'}>
            <div
              className={'profileThumbnail'}
              style={{ width: 100, height: 100 }}
            />
            <div className={'bio'}>
              <h3>강진성</h3>
              여기에 뭘 넣을까
            </div>
          </div>
          <div className={'profileDivBottom'}>
            <Button bsStyle="warning" block>
              정보수정
            </Button>
          </div>
        </div>
      </div>
      <Video />
    </PageTemplate>
    <style jsx>
      {`
        h3 {
          margin: 0px;
        }
        div {
          margin: 0px;
        }
        .profileDiv {
          display: flex;
          flex-direction: column;
        }

        .bio {
          width: 225px;
          height: 80px;
        }

        .profileDivBottom {
          margin-bottom: 10px;
        }

        .profileDivTop {
          display: flex;
          height: 100px;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          margin-bottom: 10px;
        }

        .profileThumbnail {
          background-color: orangered;
        }

        .myPage {
          display: flex;
          flex-direction: column;
          align-items: around-between;
        }
      `}
    </style>
  </>
);
