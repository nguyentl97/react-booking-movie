import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core'
import prototype from 'prop-types'
import React from 'react'
import { useState } from 'react';

const LABEL_CUSTOMER_INFOR = "THÔNG TIN CÁ NHÂN";
const LABEL_ORDER_HISTORY = "LỊCH SỬ ĐẶT VÉ";

const TABVALUE_CUSTOMER_INFOR = 0;
const TABVALUE_ORDER_HISTORY = 1;

const PADDING_3 = 3;

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`tabpanel-${index}`}
         aria-labelledby={`tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box p={PADDING_3}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

TabPanel.prototype = {
   children: prototype.node,
   index: prototype.any.isRequired,
   value: prototype.any.isRequired,
};

export default function CustomerAccount() {
   let [state, setState] = useState({ tab_value: TABVALUE_CUSTOMER_INFOR });

   const handleChange = (event, newValue) => {
      setState({ tab_value: newValue });
   };

   return (
      <div>
         <AppBar position="static">
            <Tabs value={state.tab_value} onChange={handleChange} aria-label="tab">
               <Tab label={LABEL_CUSTOMER_INFOR} id="tab-1" aria-controls="tabpanel-1" />
               <Tab label={LABEL_ORDER_HISTORY} id="tab-2" aria-controls="tabpanel-2" />
            </Tabs>
         </AppBar>
         <TabPanel value={state.tab_value} index={TABVALUE_CUSTOMER_INFOR}>
            TABVALUE_CUSTOMER_INFOR
         </TabPanel>
         <TabPanel value={state.tab_value} index={TABVALUE_ORDER_HISTORY}>
            TABVALUE_ORDER_HISTORY
         </TabPanel>
      </div>
   )
}
