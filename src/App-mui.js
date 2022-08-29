import "./App.css";

import {
	Button,
	ButtonGroup,
	// Not MUI IconButton,
	// NOT MUI FloatingActionButton,
	SplitButton,
	ToggleButton,
	ToggleButtonGroup,
	Checkbox,
	// NOT MUI CheckboxWithLabel,
	// NOT MUI CheckboxGroup,
	Radio,
	// NOT MUI RadioWithLabel,
	// NOT MUI RadioGroup,
	Rating, // NOT SHOWING ICONS,
	Select,
	Switch,
	// NOT MUI SwitchWithLabel,
	// NOT MUI SwitchGroup,
	TextField,
	Card, //PRESET COMPOSITION IS WRONG
	CardActions,
	CardActionArea,
	CardContent,
	CardHeader,
	CardMedia,
	Accordion, //expandedIcon Not working
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Paper,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemIcon, //ICONBUTTON not working
	ListItemText,
	ListSubheader,
	CircularProgress,
	LinearProgress,
	Dialog,
	DialogActions,
	DialogContentText,
	DialogTitle,
	DialogContent,
	Table,
	TableCell,
	TableContainer,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	AppBar,
	BottomNavigation,
	BottomNavigationAction,
	Breadcrumbs,
	Drawer,
	Menu, //ERROR
	Link,
	MenuList,
	MenuItem,
	Pagination,
	Stepper, //NOTHING RENDERING
	Tab,
	Tabs, // ERROR IN CONSOLE
	Avatar,
	AvatarGroup,
	Badge,
	Chip,
	Divider,
	Icon,
	Tooltip,
	Typography,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	FormLabel,
	Box,
	Container,
	Grid,
	ImageList,
	ImageListItem,
	ImageListItemBar, //Error with IconButton
	Stack,
	Alert,
	AlertTitle,
	Backdrop,
	Collapse,
	// LoadingButton IMPORTS FROM @mui/lab/LoadingButton,
	// DatePicker IMPORTS FROM @mui/lab/DatePicker,
	//NOT MUI Image,
	InputLabel,
	Skeleton,
	Slider,
	Snackbar,
	Toolbar,
	// ThemeProvider
	// UXPinWrapper,
} from "@mui/material";

import LoadingButton from "@mui/lab/LoadingButton";
import DatePicker from "@mui/lab/DatePicker";

import { Image } from "material-ui-uxpin";

import { UXPinWrapper as ThemeProvider } from "material-ui-uxpin";

function App() {
	return (
		<div className="App">
			<ThemeProvider>
				<Box style={{ width: "500px", textAlign: "left" }}>
					<Button
						variant="contained"
						color="primary"
						size="medium"
						fullWidth={false}
					>
						Button
					</Button>
					<br />
					<br />
					<ButtonGroup
						variant="contained"
						aria-label="outlined primary button group"
					>
						<Button>One</Button>
						<Button>Two</Button>
						<Button>Three</Button>
					</ButtonGroup>
					<br />
					<br />
					<LoadingButton loading={true} variant="outlined">
						Loading
					</LoadingButton>
					<br />
					<br />
					{/* ISSUE <Icon>add_circle</Icon> */}
					{/* ISSUE <IconButton ariaLabel="add accessibility text">home</IconButton> */}
					{/* ISSUE <FloatingActionButton variant="extended" label="FAB Label" color="secondary" size="medium"/> */}
					{/* ISSUE <SplitButton options={Option 1,Option 2,Option 3} /> */}
					{/* ISSUE<ToggleButton value="home" selected={false} startIcon="home" /> */}
					{/* <ToggleButtonGroup>
              <ToggleButton value="home" startIcon="home" />
              <ToggleButton value="star" startIcon="star" />
              <ToggleButton value="navigation" startIcon="navigation" />
        </ToggleButtonGroup>; */}
					<Checkbox />
					{/* ISSUE <CheckboxWithLabel label="Invoice" /> */}
					{/* ISSUE NOT MUI <CheckboxGroup name="checkbox-group" grouplabel="Favorite Colors">
          <CheckboxWithLabel value="red" label="Red" control={<Checkbox />} />
          <CheckboxWithLabel value="blue" label="Blue" control={<Checkbox />} />
          <CheckboxWithLabel value="yellow" label="Yellow" control={<Checkbox />} />
          <CheckboxWithLabel
            disabled={true}
            label="(Disabled option)"
            value="disabled"
            control={<Checkbox />}
          />
        </CheckboxGroup> */}
					<Radio />
					{/* <RadioWithLabel
    label="Radio Label"
  /> */}
					{/*  
  <RadioGroup
    name="radio-group"
    grouplabel="Favorite Color"
    value="yellow"
  >
    <RadioWithLabel
      value="red"
      label="Red"
      control={
        <Radio />
      }
    />
    <RadioWithLabel
      value="blue"
      label="Blue"
      control={
        <Radio />
      }
    />
    <RadioWithLabel
      value="yellow"
      label="Yellow"
      control={
        <Radio />
      }
    />
    <RadioWithLabel
      disabled={true}
      label="(Disabled option)"
      value="disabled"
      control={
        <Radio />
      }
    />
  </RadioGroup> */}
					<br />
					<br />
					<Rating icon="star_border" emptyIcon="star" />
					<br />
					<br />
					<Select label="Role">
						<MenuItem value="temp-value-1">Software Developer</MenuItem>
						<MenuItem value="temp-value-2">Designer</MenuItem>
						<MenuItem value="temp-value-3">Other</MenuItem>
					</Select>
					<br />
					<br />
					<Switch />
					{/* <SwitchWithLabel
    label="Off"
  />  
   */}
					{/* <SwitchGroup
    name="checkbox-group"
    grouplabel="Favorite Colors"
  >
    <CheckboxWithLabel
      label="Red"
      value="red"
      control={
        <Checkbox />
      }
    />
    <CheckboxWithLabel
      label="Blue"
      value="blue"
      control={
        <Checkbox />
      }
    />
    <CheckboxWithLabel
      label="Yellow"
      value="yellow"
      control={
        <Checkbox />
      }
    />
    <CheckboxWithLabel
      disabled={true}
      label="(Disabled option)"
      value="disabled"
      control={
        <Checkbox />
      }
    />
  </SwitchGroup>*/}
					<TextField variant="outlined" fullWidth={true} label="Let's Merge!" />
					<br />
					<br />
					<Card sx={{ borderRadius: 4, maxWidth: 345 }}>
						<CardHeader
							action="add"
							avatar="R"
							subheader="December 6, 2021"
							color="grey"
							title="Design Insights"
							ariaLabel="add"
						/>
						<CardMedia alt="Cool art" height={140} />
						<CardActionArea>
							<CardContent component="div">
								<Typography variant="h4" component="div" gutterBottom={true}>
									Trends
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Learn about the recent top design trends and get inspired. See
									what you can experiment with in your future designs.
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								Share
							</Button>
						</CardActions>
					</Card>
					<br />
					<br />
					<Accordion>
						<AccordionSummary expandedIcon="expand_more">
							<Typography>Accordion 1</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<br />
					<br />
					<Paper elevation={3}>
						<Typography padding="20px">
							Paper can be used to build surface or other elements for your
							layout.
						</Typography>
					</Paper>
					<br />
					<br />
					<List>
						<ListSubheader>List Subheader</ListSubheader>
						<ListItem>
							<ListItemButton>
								<ListItemAvatar>
									<Avatar>
										<Icon>people</Icon>
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									secondary="List Item 1 ST"
									primary="List Item 1 PT"
								/>
							</ListItemButton>
						</ListItem>
						<ListItem>
							<ListItemButton>
								<ListItemIcon>inbox</ListItemIcon>
								<ListItemText
									secondary="List Item 2 ST"
									primary="List Item 2 PT"
								/>
							</ListItemButton>
						</ListItem>
					</List>
					{/* 
  <ListItemAvatar>
    <Avatar>
      <Icon>
        people
      </Icon>
    </Avatar>
  </ListItemAvatar>


  <ListItemButton>
    <ListItemText
      secondary="Secondary Text"
      primary="Primary Text"
    />
  </ListItemButton>


  <ListItemIcon>
    inbox
  </ListItemIcon>
  <ListItemText
    secondary="Secondary Text"
    primary="Primary Text"
  />
  <ListSubheader>
    SubHeader Text
  </ListSubheader> */}
					<CircularProgress size="40px" />
					<br />
					<br />
					<LinearProgress />
					<br />
					<br />
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Username</TableCell>
								<TableCell>Email</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>Jack</TableCell>
								<TableCell>Rob</TableCell>
								<TableCell>Evan</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>jack@email.com</TableCell>
								<TableCell>robert@email.com</TableCell>
								<TableCell>evan@email.com</TableCell>
							</TableRow>
						</TableBody>
					</Table>
					<br />
					<br />
					<AppBar position="static">
						<Toolbar justifyContent="space-between">
							{/* <IconButton
        color="inherit"
        aria-label="Menu"
      >
        <Icon>
          menu
        </Icon>
      </IconButton> */}
							<Typography variant="h6" color="inherit">
								News
							</Typography>
							<Button color="inherit">Login</Button>
						</Toolbar>
					</AppBar>
					<br />
					<br />
					<BottomNavigation>
						<BottomNavigationAction label="Home" icon={<Icon>home</Icon>} />
						<BottomNavigationAction
							label="Recents"
							icon={<Icon>restore</Icon>}
						/>
						<BottomNavigationAction label="User" icon={<Icon>person</Icon>} />
					</BottomNavigation>
					<br />
					<br />
					<Breadcrumbs aria-label="breadcrumb">
						<Link href="/" color="inherit" underline="hover">
							Files
						</Link>
						<Link
							href="/getting-started/installation/"
							color="inherit"
							underline="hover"
						>
							Documents
						</Link>
						<Typography color="text.primary">Analysis</Typography>
					</Breadcrumbs>
					{/* <Menu >
    <MenuItem>
      Profile
    </MenuItem>
    <MenuItem
      divider={true}
    >
      My Account
    </MenuItem>
    <MenuItem>
      Logout
    </MenuItem>
  </Menu>  */}
					<Link>Learn more here</Link>
					<br />
					<br />
					<MenuList>
						<MenuItem>Profile</MenuItem>
						<MenuItem>My account</MenuItem>
						<MenuItem>Logout</MenuItem>
					</MenuList>
					<Pagination
						count={11}
						defaultPage={6}
						siblingCount={0}
						boundaryCount={2}
					/>{" "}
					<br />
					<br />
					<Stepper activeStep={0} orientation="horizontal" /> <br />
					<br />
					<Tab label="NEW" />
					<Tabs textColor="primary" defaultValue={1} indicatorColor="primary">
						<Tab fullWidth={true} label="Active" />
						<Tab fullWidth={true} label="Disabled" />
						<Tab fullWidth={true} label="Active" />
						<Tab fullWidth={true} label="Disabled" />
					</Tabs>
					<Avatar>JB</Avatar>
					<br />
					<br />
					<AvatarGroup max={4}>
						<Avatar alt="Remy Sharp" />
						<Avatar alt="Travis Howard" />
						<Avatar alt="Cindy Baker" />
						<Avatar alt="Agnes Walker" />
						<Avatar alt="Trevor Henderson" />
					</AvatarGroup>
					<br />
					<br />
					<Badge
						horizontal="right"
						vertical="top"
						color="primary"
						badgeContent={3}
					>
						<Icon color="action">mail</Icon>
					</Badge>
					<br />
					<br />
					<Chip label="I'm Chip" /> <br />
					<br />
					<Divider>
						<Typography>Optional Child</Typography>
					</Divider>
					<Icon color="action">home</Icon>
					<br />
					<br />
					<Tooltip title="Title Here" PopperProps="[object Object]">
						<Button>home</Button>
					</Tooltip>
					<br />
					<br />
					<Typography variant="h4">Roboto</Typography>
					<br />
					<br />
					<FormControl fullWidth="true">
						<InputLabel>Age</InputLabel>
						<Select>
							<MenuItem value="">None</MenuItem>
							<MenuItem value="10">Ten</MenuItem>
							<MenuItem value="20">Twenty</MenuItem>
							<MenuItem value="30">Thirty</MenuItem>
						</Select>
						<FormHelperText>Some important helper text</FormHelperText>
					</FormControl>
					<br />
					<br />
					<FormControlLabel
						label="I'm a label"
						control={<Checkbox defaultChecked="true" value="gilad" />}
					/>
					<FormControl component="fieldset">
						<FormLabel component={"legend"}>Assign responsibility</FormLabel>
						<FormGroup>
							<FormControlLabel
								label="Gilad Gray"
								control={<Checkbox value="gilad" />}
							/>
							<FormControlLabel
								label="Jason Killian"
								control={<Checkbox value="jason" />}
							/>
							<FormControlLabel
								label="Antoine Llorca"
								control={<Checkbox value="antoine" />}
							/>
						</FormGroup>
					</FormControl>
					<br />
					<br />
					<FormHelperText>Merge</FormHelperText>
					<br />
					<br />
					<FormLabel>Merge</FormLabel>
					<br />
					<br />
					<Box>
						<Typography variant="h3">Your ideas</Typography>
					</Box>
					<br /> <br />
					<Container>Inside container</Container>
					<br />
					<br />
					<Grid container={true} spacing="8">
						<Grid item={true} xs="3" order={1}>
							<Button
								variant="outlined"
								fullWidth={true}
								size="medium"
								color="primary"
							>
								3 cols
							</Button>
						</Grid>
						<Grid item={true} xs="3" order={2}>
							<Button
								variant="outlined"
								fullWidth={true}
								size="medium"
								color="primary"
							>
								3 cols
							</Button>
						</Grid>
						<Grid item={true} xs="3" order={3}>
							<Button
								variant="outlined"
								fullWidth={true}
								size="medium"
								color="primary"
							>
								3 cols
							</Button>
						</Grid>
						<Grid item={true} xs="3" order={4}>
							<Button
								variant="outlined"
								fullWidth={true}
								size="medium"
								color="primary"
							>
								3 cols
							</Button>
						</Grid>
						<Grid item={true} xs="8" order={5}>
							<Button
								variant="outlined"
								fullWidth={true}
								size="medium"
								color="primary"
							>
								8 cols
							</Button>
						</Grid>
						<Grid item={true} xs="4" order={6}>
							<Button
								variant="outlined"
								fullWidth={true}
								size="medium"
								color="primary"
							>
								4 cols
							</Button>
						</Grid>
					</Grid>
					<ImageList cols={3} rowHeight="160">
						<ImageListItem cols={1}>
							<Image alt="Trends" />
							<ImageListItemBar
								title="Trends"
								titlePosition="top"
								postion="left"
								// actionIcon={
								//   <IconButton
								//     color="inherit"
								//     ariaLabel="Trends icon button"
								//   >
								//     star_border
								//   </IconButton>
								// }
							/>
						</ImageListItem>
						<ImageListItem cols={2}>
							<Image
								alt="Insights "
								src="https://images.unsplash.com/photo-1608501947097-86951ad73fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
							/>
							<ImageListItemBar
								title="Insights "
								titlePosition="top"
								postion="left"
								// actionIcon={
								//   <IconButton
								//     color="inherit"
								//     ariaLabel="Insights icon button"
								//   >
								//     star_border
								//   </IconButton>
								// }
							/>
						</ImageListItem>
						<ImageListItem cols={3}>
							<Image
								alt="Inspiration"
								src="https://images.unsplash.com/photo-1607893378714-007fd47c8719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							/>
							<ImageListItemBar
								title="Inspiration"
								titlePosition="top"
								postion="left"
								// actionIcon={
								//   <IconButton
								//     color="inherit"
								//     ariaLabel="Inspiration icon button"
								//   >
								//     star_border
								//   </IconButton>
								// }
							/>
						</ImageListItem>
					</ImageList>
					<br />
					<br />
					<ImageListItem cols={1}>
						<Image alt="Trends" />
						<ImageListItemBar
							title="Trends"
							titlePosition="top"
							postion="left"
							// actionIcon={
							//   <IconButton
							//     color="inherit"
							//     ariaLabel="Trends icon button"
							//   >
							//     star_border
							//   </IconButton>
							// }
						/>
					</ImageListItem>
					<br />
					<br />
					<ImageListItemBar
						title="Trends"
						titlePosition="top"
						postion="left"
						// actionIcon={
						//   <IconButton
						//     color="inherit"
						//     ariaLabel="Trends icon button"
						//   >
						//     star_border
						//   </IconButton>
						// }
					/>
					<br />
					<br />
					<Stack direction="row" spacing={2}>
						<Button variant="outlined">Button 1</Button>
						<Button variant="outlined">Button 2</Button>
						<Button variant="outlined">Button 3</Button>
					</Stack>
					<br />
					<br />
					<Alert /> <br />
					<br />
					<DatePicker
						helperText="I'm helping you! pick a date."
						label="Pick A Date"
					/>
					<br />
					<br />
					<Skeleton variant="text" width={200} height={200} />
					<br />
					<br />
					<Slider />
				</Box>
			</ThemeProvider>
		</div>
	);
}

export default App;
