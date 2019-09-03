import React, { createRef } from 'react';
import _ from 'lodash'
import ReactTable from "react-table";

//import ReactDOM from 'react-dom';
//import ModalModalExample from './ModalModalExample.jsx';

import { get_Test_Json, get_Test_Text, get_Date } from '../core/core_Function.jsx';

import W_table from '../chart/firstChart/w_table.jsx';
import Test_Table from '../chart/fourthChart/w_table.jsx';

import {
  Button, Header, Image, Modal,
  Message, Input, Icon, Container, Accordion, Sticky, Table,
  Divider,
  Grid,
  Segment,
  Ref,
  Visibility,
  Checkbox

} from 'semantic-ui-react'

// trigger={<Button>Show Modal</Button>}

const ModalExampleScrollingContent = () => (
  <Modal trigger={<Button>T3_button</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />

      <Modal.Description>
        <Header>Modal Header</Header>

        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

        {_.times(8, i => (
          <Image key={i} src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ paddingBottom: 5 }} />
        ))}

      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>

      <Button primary>
        Proceed <Icon name='chevron right' />
      </Button>
    </Modal.Actions>
  </Modal>
)


const Modal_Ex = () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)


export default class Main_Test_ModalWind extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        open: false,
        activeIndex: 0,


        calculations: {
          topVisible: false,
          bottomVisible: false,
        },
        showWireframe: false,
      };
  }

  contextRef = createRef()

  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  handleWireframe = (e, { checked }) =>
    this.setState({ showWireframe: checked })




  handleRef = component => (this.ref = component);
  //open = () => this.setState({ open: true }, () => this.ref.focus());


  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex, calculations, showWireframe } = this.state

    let Id = "11";
    let data = get_Date();
    let size = 'fullscreen'; //    'mini', 'tiny', 'small', 'large', 'fullscreen'
    return (
      <div id='testDiv'>
        <input type="button" onClick={this.open} value="T1_button" />
        <br />

        <div>

          <Ref innerRef={this.contextRef}>
            <Grid columns={2}>
              <Grid.Column>
                {showWireframe ? (
                  <Segment>
                    {_.map(
                      [
                        '/images/trk1.png',
                        '/images/trk2.png',
                        '/images/oil_1.png',
                        '/images/wireframe/paragraph.png',
                        '/images/wireframe/centered-paragraph.png',
                        '/images/wireframe/short-paragraph.png',
                        '/images/wireframe/media-paragraph.png',
                        '/images/wireframe/paragraph.png',
                        '/images/wireframe/centered-paragraph.png',
                        '/images/wireframe/short-paragraph.png',
                        '/images/wireframe/media-paragraph.png',
                        '/images/wireframe/paragraph.png',
                      ],
                      (src, index, images) => (
                        <React.Fragment key={index}>
                          <Image src={src} />
                          {index !== images.length - 1 && <Divider />}
                        </React.Fragment>
                      ),
                    )}
                  </Segment>
                ) : null}

                <Visibility
                  offset={[1000, 1000]}
                  onUpdate={this.handleUpdate}
                  updateOn='repaint'
                >
                  <Segment>
                    It's a tricky <code>Segment</code>
                  </Segment>
                </Visibility>
              </Grid.Column>

              <Grid.Column >
                <Sticky context={this.contextRef}
                  bottomOffset={50}
                  offset={40}
                  pushing
                  h
                >
                  <Segment >
                    <Checkbox
                      checked={showWireframe}
                      label='Show Wifeframe'
                      onChange={this.handleWireframe}
                      toggle
                    />
                    <Accordion>
                      <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        What is a dog?
        </Accordion.Title>

                      <Accordion.Content active={activeIndex === 0}>
                        <p>
                          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
                            be found as a welcome guest in many households across the world.
          </p>
                      </Accordion.Content>

                      <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        What kinds of dogs are there?
        </Accordion.Title>
                      <Accordion.Content active={activeIndex === 1}>
                        <p>
                          There are many breeds of dogs. Each breed varies in size and temperament. Owners often
                          select a breed of dog that they find to be compatible with their own lifestyle and
                          desires from a companion.
          </p>
                      </Accordion.Content>

                      <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        How do you acquire a dog?
        </Accordion.Title>
                      <Accordion.Content active={activeIndex === 2}>
                        <p>
                          Three common ways for a prospective owner to acquire a dog is from pet shops, private
                          owners, or shelters.
          </p>
                        <p>
                          A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
                          owner allows you to assess the pedigree and upbringing of your dog before choosing to
                          take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
                          who may not find one so readily.
          </p>
                      </Accordion.Content>
                    </Accordion>

                  </Segment>
                </Sticky>
              </Grid.Column>
            </Grid>
          </Ref>

        </div>
        <div>

        </div>
        <Sticky context={this.contextRef}>
          <Accordion>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='dropdown' />
              What is a dog?
        </Accordion.Title>

            <Accordion.Content active={activeIndex === 0}>
              <p>
                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
                  be found as a welcome guest in many households across the world.
          </p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
              <Icon name='dropdown' />
              What kinds of dogs are there?
        </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                There are many breeds of dogs. Each breed varies in size and temperament. Owners often
                select a breed of dog that they find to be compatible with their own lifestyle and
                desires from a companion.
          </p>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
              <Icon name='dropdown' />
              How do you acquire a dog?
        </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>
                Three common ways for a prospective owner to acquire a dog is from pet shops, private
                owners, or shelters.
          </p>
              <p>
                A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
                owner allows you to assess the pedigree and upbringing of your dog before choosing to
                take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
                who may not find one so readily.
          </p>
            </Accordion.Content>
          </Accordion>
        </Sticky>
        <div>
          <Button primary content='T2_button' onClick={this.open} />
          <Modal id="ModalTable" size={size} open={this.state.open} onClose={this.close} closeIcon>
            <Modal.Header>Данные от строке {Id}</Modal.Header>
            <Container>
              <Test_Table Data={data} />
            </Container>
          </Modal>
          <hr />
          <ModalExampleScrollingContent />
        </div>
      </div>
    );
  }
}
/*


             <ReactTable id="ReactTable"
                ref="reactTable"
                data={data}
                columns={[
                  {
                    Header: "Дата",
                    accessor: "Datetime"
                  },
                  {
                    Header: "АЗК",
                    columns: [
                      {
                        Header: "№ АЗК",
                        accessor: "SHOP_NUM"
                      },
                      {
                        Header: "№ кассы",
                        accessor: "KASS_NUM"
                      },
                      {
                        Header: "Смена",
                        accessor: "SHIFT_NUM"
                      },
                      {
                        Header: "Кассир",
                        accessor: "CASHIER_ID"
                      }
                    ]
                  },
                  {
                    Header: "События",
                    columns: [
                      {
                        Header: "Тип",
                        accessor: "EVENT_NAME"
                      },
                      {
                        Header: "Длительность",
                        accessor: "Duration"
                      },
                      {
                        Header: "Дата",
                        accessor: "DateKey"
                      },
                      {
                        Header: "Время",
                        accessor: "TimeKey"
                      }
                    ]
                  },
                  {
                    Header: "Частотность",
                    accessor: "F",
                    id: "Col_F",
                    ref: "Col_F"
                  },
                  {
                    Header: "Важность",
                    accessor: "M",
                  }
                ]}

                defaultPageSize={10}

                filterable={false}
                show={true}
                nextText={'>'}
                previousText={'<'}
                rowsText={'строк'}
                width={150}
                pageText={'стр.'}
                ofText={'из'}
                className="-striped -highlight"
              >

              </ReactTable>


*/

/*
            <Modal.Actions>

              <Button onClick={this.close}>закрыть</Button>
            </Modal.Actions>





<ReactTable id="ReactTable"
ref="reactTable"

data={data}
columns={[
{
 Header: "t1",
 accessor: "code"
},
{
       Header: "t2",
       accessor: "name"
    }
]}

defaultPageSize={10}

filterable={true}
show={false}
nextText={'>'}
previousText={'<'}
rowsText={'строк'}
width={150}
pageText={'стр.'}
ofText={'из'}
className="-striped -highlight"
>

</ReactTable>
*/









/*

          <Button primary content='T2_button' onClick={this.open} />

          <Modal open={this.state.open} onClose={this.close}>
            <Modal.Content>
              <Input ref={this.handleRef} />
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={this.close}>закрыть</Button>
            </Modal.Actions>
          </Modal>
          <hr />
          <ModalExampleScrollingContent />


*/


/*

<div>
        <Button primary content='Open' onClick={this.open} />


        <Modal open={this.state.open} onClose={this.close}>
            <Modal.Content>
              <Input ref={this.handleRef} />
            </Modal.Content>
          </Modal>

      </div>

          <Modal open={this.state.open} onClose={this.close}>
            <Modal.Content>
              <Input ref={this.handleRef} />
            </Modal.Content>
          </Modal>

          */