import React, { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }: any) {
  // console.log(data);
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        onConnect={(params: any) => console.log('handle onConnect', params)}
        isConnectable={data?.isConnectableLeft !== false}
      />
      <div className="custom-node rounded p-2 min-w-[120px]" style={{ background: data?.isActive ? "#F7901D" : "rgb(203 213 225)" }}>
        <p className='text-[14px]'>{data.label}</p>
        <p className='text-[10px]'>{data.description}</p>
        <p className='text-[16px] font-bold text-white'>{data.pct}%</p>
        <p className='text-[16px] font-bold text-white'>{data.number}</p>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ background: '#555', top: '50%' }}
        isConnectable={data?.isConnectableLeft !== false}
      />
    </>
  );
}
export default CustomNode;