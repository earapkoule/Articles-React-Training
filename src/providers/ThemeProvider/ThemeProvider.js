import React from 'react';

import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export default ({ theme, children }) => <MuiThemeProvider theme={createMuiTheme(theme)}>{children}</MuiThemeProvider>;