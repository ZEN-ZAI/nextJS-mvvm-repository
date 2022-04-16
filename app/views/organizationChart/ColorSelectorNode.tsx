import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React, { memo, FC, CSSProperties } from 'react';

import { Handle, Position, NodeProps, Connection, Edge } from 'react-flow-renderer';

const targetHandleStyle: CSSProperties = { background: '#555', width: '15px', height: '15px' };
const sourceHandleStyle: CSSProperties = { background: '#555', width: '15px', height: '15px' };

const onConnect = (params: Connection | Edge) => console.log('handle onConnect', params);

const ColorSelectorNode: FC<NodeProps> = ({ data, isConnectable }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} style={targetHandleStyle} onConnect={onConnect} />
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Handle type="source" position={Position.Bottom} style={sourceHandleStyle} isConnectable={isConnectable} />
      {/* <Handle type="source" position={Position.Right} id="b" style={sourceHandleStyleB} isConnectable={isConnectable} /> */}
    </>
  );
};

export default memo(ColorSelectorNode);