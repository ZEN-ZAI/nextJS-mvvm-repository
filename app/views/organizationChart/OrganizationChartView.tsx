import React, { useState, MouseEvent } from 'react';

import ReactFlow, {
	MiniMap,
	Controls,
  removeElements,
  addEdge,
  isNode,
  Background,
  Elements,
  BackgroundVariant,
  FlowElement,
  Node,
  Edge,
  Connection,
  OnLoadParams,
} from 'react-flow-renderer';

import ColorSelectorNode from './ColorSelectorNode';

const nodeTypes = {
  selectorNode: ColorSelectorNode,
};

const onNodeDragStop = (_: MouseEvent, node: Node) => console.log('drag stop', node);
const onElementClick = (_: MouseEvent, element: FlowElement) => console.log('click', element);

const initialElements: Elements = [
  { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 }, className: 'light' },
  { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 }, className: 'light' },
  { id: '3', type: 'selectorNode', data: { label: 'Node 3' }, position: { x: 400, y: 100 }, className: 'light' },
  { id: '4', data: { label: 'Node 4' }, position: { x: 400, y: 200 }, className: 'light' },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3' },
];

const initBgColor = '#1A192B';

const BasicFlow = () => {
	const [bgColor, setBgColor] = useState(initBgColor);
  const [rfInstance, setRfInstance] = useState<OnLoadParams | null>(null);
  const [elements, setElements] = useState<Elements>(initialElements);
  const onElementsRemove = (elementsToRemove: Elements) => setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params: Edge | Connection) => setElements((els) => addEdge(params, els));
  const onLoad = (reactFlowInstance: OnLoadParams) => setRfInstance(reactFlowInstance);

  const logToObject = () => console.log(rfInstance?.toObject());

  return (
    <ReactFlow
      elements={elements}
      onLoad={onLoad}
      onElementClick={onElementClick}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onNodeDragStop={onNodeDragStop}
			snapToGrid={true}
			nodeTypes={nodeTypes}
			// defaultPosition={[100,100]}
      // defaultZoom={1.5}
      // minZoom={0.2}
      // maxZoom={4}
    >
      <div style={{ position: 'absolute', right: 10, top: 10 }}>
        <button onClick={logToObject}>toObject</button>
      </div>
			<Background variant={BackgroundVariant.Dots} />
			<MiniMap/>
			<Controls />
    </ReactFlow>
		
  );
};

export default BasicFlow;
