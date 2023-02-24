import React, { Component } from "react";
import PropTypes from "prop-types";
import Tree from "react-d3-tree";
import Paper from "material-ui/Paper";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import DeleteTrashIcon from "material-ui/svg-icons/action/delete";

const cardData = [
  {
    name: "1",
    attributes: {
      title: "Card title 1",
      subtitle: "Card subtitle 1",
      text: "Some text to build on the card.",
      status: "success"
    },
    nodeSvgShape: {
      shape: "rect",
      shapeProps: {
        width: 20,
        height: 20,
        x: -10,
        y: -10,
        fill: "blue"
      }
    },
    children: [
      {
        name: "1a",
        attributes: {
          title: "Card title 1a",
          subtitle: "Card subtitle 1a",
          text: "Some text to build on the card.",
          status: "failure"
        }
      },
      {
        name: "1b",
        attributes: {
          title: "Card title 1b",
          subtitle: "Card subtitle 1b",
          text: "Some text to build on the card.",
          status: "exception"
        }
      }
    ]
  }
];

const containerStyles = {
  width: "100%",
  height: "100vh"
};

function color(status) {
  // console.log("test color: ", status);
  if (status !== null) {
    // console.log("In Translate: ", status);
    switch (status.toLowerCase()) {
      case "success":
        return "SEAGREEN";
      case "failure":
        return "#CA3928";
      case "exception":
        return "#FFC300";
      default:
        return "GRAY";
    }
  } else {
    // console.log("status is null");
    return null;
  }
}

const Card = ({ nodeData, addNode }) => (
  <div>
    <div className="card">
      <div
        className="card-header"
        style={{ backgroundColor: color(nodeData.attributes.status) }}
      >
        <button
          onClick={() => {
            console.log("Add Sibling Click: ");
            const newSibling = {
              name: "newSibling",
              attributes: {
                title: "New Sibling",
                subtitle: "New Sibling Subtitle",
                text: "New sibling text",
                status: "success"
              }
            };
            addNode(newSibling, "sibling");
          }}
        >
          Add Sibling
        </button>
        <button
          onClick={() => {
            console.log("Add Child Click: ");
            const newChild = {
              name: "newChild",
              attributes: {
                title: "New Child",
                subtitle: "New Child Subtitle",
                text: "New child text",
                status: "success"
              }
            };
            addNode(newChild, "child");
          }}
        >
          Add Child
        </button>
        <button
          onClick={() => {
            console.log("Remove Click: ");
          }}
        >
          Remove
        </button>
      </div>
      <div className="card-body">
        <h5 style={{ margin: "5px" }} className="card-title">
          {nodeData.attributes.title}
        </h5>
        <h6 style={{ margin: "5px" }} className="card-subtitle mb-2 text-muted">
          {nodeData.attributes.subtitle}
        </h6>
        <p style={{ margin: "5px" }} className="card-text">
          {nodeData.attributes.text}
        </p>
      </div>
    </div>
  </div>
);

export default class CenteredTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempstate: 0
    };
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <Paper>
          <AppBar
            title="Add Cards Flow"
            showMenuIconButton={false}
            zDepth={0}
            className="appBarTitleStyle"
            titleStyle={{ fontSize: "1.3rem", lineHeight: "40px" }}
          />
          <div style={containerStyles}>
            <Tree
              // translate={this.state.translate}
              onClick={(data) => console.log("clicked node: ", data)}
              collapsible={false}
              data={cardData}
              zoomable={true}
              scaleExtent={{ min: 0.5, max: 2 }}
              pathFunc="elbow"
              allowForeignObjects={true}
              nodeSvgShape={{ shape: "none" }}
              translate={{ x: 50, y: 300 }}
              nodeSize={{ x: 300, y: 400 }}
              nodeLabelComponent={{
                render: (nodeProps) => (
                  <Card {...nodeProps} addNode={this.addNode} />
                ),
                foreignObjectWrapper: {
                  style: {
                    border: "1px solid black",
                    width: "28%",
                    height: "25%"
                    // x: 10
                  }
                }
              }}
            />
          </div>
        </Paper>
      </div>
    );
  }
}
