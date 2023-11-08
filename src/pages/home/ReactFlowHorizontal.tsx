/* eslint-disable no-unsafe-optional-chaining */
import React, { useCallback } from "react";
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from "./CustomNode";

const convertToRFNodes = (nodes: any) => nodes.map((nd: any) => ({
  ...nd, type: nd?.position?.x === 1 ? "custom" : "custom",
  sourcePosition: 'right',
  targetPosition: 'left',
  position: {
    x: (nd?.position?.x - 1) * 250,
    y: (nd?.position?.y - 1) * 120,
  }
}));

const convertToRFEdges = (edges: any) => edges.map((ed: any) => ({
  ...ed,
  style: {
    strokeWidth: ed.data.weight * 10
  },
}))

function ReactFlowHorizontal({ nodesData, edgesData }: any) {
  // console.log(convertToRFNodes(nodesData))
  // console.log(convertToRFEdges(edgesData))

  const nodeTypes = {
    custom: CustomNode,
  };

  const [nodes, _, onNodesChange] = useNodesState(convertToRFNodes(nodesData));
  const [edges, setEdges, onEdgesChange] = useEdgesState(convertToRFEdges(edgesData));

  return (
    <div className="w-[calc(80vw-256px)] pl-[2.5vw] h-[95vh]">
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap />
        <Controls />
        {/* <Background /> */}
      </ReactFlow>

    </div >
  )
}

export default ReactFlowHorizontal;

