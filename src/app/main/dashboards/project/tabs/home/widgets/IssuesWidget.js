import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

function IssuesWidget() {
  const data = []

  return (
    <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
      <div className="text-center mt-8">
        <Typography className="text-7xl sm:text-8xl font-bold tracking-tight leading-none text-amber-500">
          {data.length}
        </Typography>
        <Typography className="text-lg font-medium text-amber-600">Invoices</Typography>
      </div>
    </Paper>
  );
}

export default memo(IssuesWidget);
