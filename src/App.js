import "./App.css";

import {
	Button, ButtonGroup, Stack, IconButton, FloatingActionButton, UXPinWrapper,
	LoadingButton, //BROKEN - wrong import
	SplitButton,
	ToggleButton,
	ToggleButtonGroup,
	Icon,
	Checkbox,
	CheckboxWithLabel,
	CheckboxGroup,
	Radio,
	RadioWithLabel, //BROKEN
	RadioGroup, //BROKEN
	Rating,
	Select, //BROKEN
	Switch,
	SwitchWithLabel, //BROKEN
	SwitchGroup, //BROKEN
	TextField,
	Card,
	CardHeader,
	CardMedia,
	CardActionArea,
	CardContent,
	Typography,
	CardActions,
	Accordion, //BROKEN
	AccordionSummary,
	AccordionDetails,
	AccordionActions,
	Paper,
	AvatarGroup,
	Avatar,
	ListItem,
	ListItemText,
	ListItemButton,
	ListItemIcon,
	List,
	ListSubheader,
	ListItemAvatar,
	CircularProgress,
	LinearProgress,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TableContainer,
	AppBar,
	Toolbar,
	BottomNavigation,
	BottomNavigationAction,
	Breadcrumbs,
	Link,
	Menu, //BROKEN
	MenuItem,
	MenuList,
	Pagination,
	Stepper, //BROKEN
	Tabs,
	Tab,
	Badge,
	// Chip, //BROKEN
	Divider,
	Tooltip,
	FormControl,
	FormHelperText,
	FormControlLabel,
	FormLabel,
	Box,
	Container,
	Grid,
	Image,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Alert,
	DatePicker, //BROKEN
	Skeleton,
	Slider,
	Chip

} from "merge-material"


function App() {
	return (
		<UXPinWrapper>
			<Stack spacing={2} sx={{ width: '50%' }}>
				<Button variant="contained">test</Button>
					<hr/>
				<ButtonGroup
					variant="contained"
					aria-label="outlined primary button group"
				>
					<Button>One</Button>
					<Button>Two</Button>
					<Button>Three</Button>
				</ButtonGroup>
				<hr/>
				{/* <LoadingButton loading={true} variant="outlined">
					Loading
				</LoadingButton> */}
				<hr/>
				<IconButton ariaLabel="add accessibility text">
					home
				</IconButton>
				<hr/>
				<FloatingActionButton
					variant="extended"
					label="FAB Label"
					color="primary"
					size="medium"
				/>

				<hr/>
				<ToggleButton
					value="home"
					selected={false}
					startIcon="home"
				/>

				<Checkbox />
				<hr/>
				<Radio
					checked={false}
				/>
				<hr/>
				<Rating
					icon="star_border"
					emptyIcon="star"
				/> 
				<hr/>
				<Switch />
				<hr />
				<TextField
					variant="outlined"
					fullWidth={true}
					label="Let's Merge!"

				/>
				<hr />
				<Card
					sx={{ borderRadius: 4, maxWidth: 345 }}
				>
					<CardHeader
						action="add"
						avatar="R"
						subheader="December 6, 2021"
						color="grey"
						title="Design Insights"
						ariaLabel="add"
					/>
					<CardMedia
						alt="Cool art"
						height={140}
					/>
					<CardActionArea>
						<CardContent
							component="div"
						>
							<Typography
								variant="h4"
								component="div"
								gutterBottom={true}
							>
								Trends
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
							>
								Learn about the recent top design trends and get inspired. See what you can experiment with in your future designs.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button
							size="small"
							color="primary"
						>
							Share
						</Button>
					</CardActions>
				</Card>
				<hr />
				<Paper
					elevation={3}
				>
					<Typography
						padding="20px"
					>
						Paper can be used to build surface or other elements for your layout.
					</Typography>
				</Paper>
				<hr />
				<List>
					<ListSubheader>
						List Subheader
					</ListSubheader>
					<ListItem>
						<ListItemButton>
							<ListItemAvatar>
								<Avatar>
									<Icon>
										people
									</Icon>
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
							<ListItemIcon>
								inbox
							</ListItemIcon>
							<ListItemText
								secondary="List Item 2 ST"
								primary="List Item 2 PT"
							/>
						</ListItemButton>
					</ListItem>
				</List>
				<hr/>
				<CircularProgress
					size="40px"
				/>
				<hr/>
				<LinearProgress />
				<hr />
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>
									Name
								</TableCell>
								<TableCell>
									Username
								</TableCell>
								<TableCell>
									Email
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>
									Jack
								</TableCell>
								<TableCell>
									Rob
								</TableCell>
								<TableCell>
									Evan
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									jack@email.com
								</TableCell>
								<TableCell>
									robert@email.com
								</TableCell>
								<TableCell>
									evan@email.com
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				<hr />
				<AppBar
					position="static"
				>
					<Toolbar
						justifyContent="space-between"
					>
						<IconButton
							color="inherit"
							aria-label="Menu"
						>
							<Icon>
								menu
							</Icon>
						</IconButton>
						<Typography
							variant="h6"
							color="inherit"
						>
							News
						</Typography>
						<Button
							color="inherit"
						>
							Login
						</Button>
					</Toolbar>
				</AppBar>
				<hr />
				<BottomNavigation>
					<BottomNavigationAction
						label="Home"
						icon={
							<Icon>
								home
							</Icon>
						}
					/>
					<BottomNavigationAction
						label="Recents"
						icon={
							<Icon>
								restore
							</Icon>
						}
					/>
					<BottomNavigationAction
						label="User"
						icon={
							<Icon>
								person
							</Icon>
						}
					/>
				</BottomNavigation>
				<hr />
				<Breadcrumbs
					aria-label="breadcrumb"
				>
					<Link
						href="/"
						color="inherit"
						underline="hover"
					>
						Files
					</Link>
					<Link
						href="/getting-started/installation/"
						color="inherit"
						underline="hover"
					>
						Documents
					</Link>
					<Typography
						color="text.primary"
					>
						Analysis
					</Typography>
				</Breadcrumbs>
				<hr />
				<MenuList>
					<MenuItem>
						Profile
					</MenuItem>
					<MenuItem>
						My account
					</MenuItem>
					<MenuItem>
						Logout
					</MenuItem>
				</MenuList>
				<hr />
				<Pagination
					count={11}
					defaultPage={6}
					siblingCount={0}
					boundaryCount={2}
				/>
				<hr />
				<Tabs
					textColor="primary"
					defaultValue={1}
					indicatorColor="primary"
				>
					<Tab
						fullWidth={true}
						label="Active"
					/>
					<Tab
						fullWidth={true}
						label="Disabled"
					/>
					<Tab
						fullWidth={true}
						label="Active"
					/>
					<Tab
						fullWidth={true}
						label="Disabled"
					/>
				</Tabs>
				<hr />

				<hr />
				<AvatarGroup
					max={4}
				>
					<Avatar
						alt="Remy Sharp"
					/>
					<Avatar
						alt="Travis Howard"
					/>
					<Avatar
						alt="Cindy Baker"
					/>
					<Avatar
						alt="Agnes Walker"
					/>
					<Avatar
						alt="Trevor Henderson"
					/>
				</AvatarGroup>
				<hr />
				<Badge
					horizontal="right"
					vertical="top"
					color="primary"
					badgeContent={3}
				>
					<Icon
						color="action"
					>
						mail
					</Icon>
				</Badge>
				<hr />
				<Divider>
					<Typography>
						Optional Child
					</Typography>
				</Divider>
				<hr />
			<Tooltip
					title="Title Here"
					PopperProps="[object Object]"
				>
					<Button>
						home
					</Button>
				</Tooltip> 
				<hr />
				<Typography
					variant="h4"
				>
					Roboto
				</Typography>
				<FormControl
					fullWidth="true"
				>

					<FormHelperText>
						Some important helper text
					</FormHelperText>
					<FormControlLabel
						label="I'm a label"
						control={
							<Checkbox
								defaultChecked="true"
								value="gilad"
							/>
						}
					/>
					<FormLabel>
						Form Label
					</FormLabel>
				</FormControl>
				<hr />
				<Box>
					<Typography
						variant="h6"
					>
						Box
					</Typography>
				</Box>
				<hr/>
				<Container>container</Container>
				<hr />
				<Grid
					container={true}
					spacing="8"
				>
					<Grid
						item={true}
						xs="3"
						order={1}
					>
						<Button
							variant="outlined"
							fullWidth={true}
							size="medium"
							color="primary"
						>
							3 cols
						</Button>
					</Grid>
					<Grid
						item={true}
						xs="3"
						order={2}
					>
						<Button
							variant="outlined"
							fullWidth={true}
							size="medium"
							color="primary"
						>
							3 cols
						</Button>
					</Grid>
				</Grid>
				<hr />
				<ImageList
					cols={3}
					rowHeight="160"
				>
					<ImageListItem
						cols={1}
					>
						<Image
							alt="Trends"
						/>
						<ImageListItemBar
							title="Trends"
							titlePosition="top"
							postion="left"
							actionIcon={
								<IconButton
									color="inherit"
									ariaLabel="Trends icon button"
								>
									star_border
								</IconButton>
							}
						/>
					</ImageListItem>
					<ImageListItem
						cols={2}
					>
						<Image
							alt="Insights "
							src="https://images.unsplash.com/photo-1608501947097-86951ad73fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
						/>
						<ImageListItemBar
							title="Insights "
							titlePosition="top"
							postion="left"
							actionIcon={
								<IconButton
									color="inherit"
									ariaLabel="Insights icon button"
								>
									star_border
								</IconButton>
							}
						/>
					</ImageListItem>
					<ImageListItem
						cols={3}
					>
						<Image
							alt="Inspiration"
							src="https://images.unsplash.com/photo-1607893378714-007fd47c8719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
						/>
						<ImageListItemBar
							title="Inspiration"
							titlePosition="top"
							postion="left"
							actionIcon={
								<IconButton
									color="inherit"
									ariaLabel="Inspiration icon button"
								>
									star_border
								</IconButton>
							}
						/>
					</ImageListItem>
				</ImageList>
				<hr />
				<Stack
					direction="row"
					spacing={2}
				>
					<Button
						variant="outlined"
					>
						Stack 1
					</Button>
					<Button
						variant="outlined"
					>
						Stack 2
					</Button>
					<Button
						variant="outlined"
					>
						Stack 3
					</Button>
				</Stack>
				<hr />
				<Skeleton
					variant="text"
					width={200}
					height={200}
				/>
				<hr/>
				<Slider />
				<hr/>
				<Chip
				label="I'm Chip"
				deletable="true"
			/>
			<hr />
			<Alert /> 
			<hr />
			<SplitButton
				options={["Option 1", "Option 2", "Option 3"]}
			/>
			<hr />
			<ToggleButtonGroup>
				<ToggleButton
					value="home"
					startIcon="home"
				/>
				<ToggleButton
					value="star"
					startIcon="star"
				/>
				<ToggleButton
					value="navigation"
					startIcon="navigation"
				/>

			</ToggleButtonGroup>
			<hr />
			<CheckboxWithLabel
				label="Invoice"
			/>
			<hr/>
			<SwitchWithLabel
				label="Off"
			/>
			<hr />
			<SwitchGroup
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
			</SwitchGroup>
			
			<CheckboxGroup
				name="checkbox-group"
				grouplabel="Favorite Colors"
			>
				<CheckboxWithLabel
					value="red"
					label="Red"
					control={
						<Checkbox />
					}
				/>
				<CheckboxWithLabel
					value="blue"
					label="Blue"
					control={
						<Checkbox />
					}
				/>
				<CheckboxWithLabel
					value="yellow"
					label="Yellow"
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
			</CheckboxGroup>
			<br />
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
			</RadioGroup>
			<br />
			<Select
				label="Role"
			>
				<MenuItem
					value="temp-value-1"
				>
					Software Developer
				</MenuItem>
				<MenuItem
					value="temp-value-2"
				>
					Designer
				</MenuItem>
				<MenuItem
					value="temp-value-3"
				>
					Other
				</MenuItem>
			</Select>
			<br />
			<Menu>
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
			</Menu>
			<br />
			<Stepper
				activeStep={0}
				orientation="horizontal"
			/>

			</Stack>
		</UXPinWrapper>

	)
}

export default App;
