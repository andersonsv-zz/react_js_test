import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Smartphone from "@material-ui/icons/Smartphone";
import Getapp from "@material-ui/icons/GetApp";
import ThumbsDownUp from "@material-ui/icons/ThumbsUpDown";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import * as gplay from 'google-play-scraper';
import * as applestore from 'app-store-scraper';
 
import { bugs, website, server } from "variables/general.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    dataLocalizaAndroid: [],
    dataLocalizaIos: [],
    dataMovidaAndroid: [],
    dataMovidaIos: [],
    dataUnidasAndroid: [],
    dataUnidasIos: []
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  async componentDidMount() {
    //LOCALIZA
    const responseLocalizaAndroid = await gplay.app(
      {appId: 'com.localiza.mobile' , 
      lang : "pt", 
      country: "br"})
    const jsonLocalizaAndroid = await responseLocalizaAndroid;
    this.setState({ dataLocalizaAndroid: jsonLocalizaAndroid });

    const responseLocalizaIos = await applestore.app(
      {id: 429739212, 
      country: 'br'
    })
    const jsonLocalizaIos = await responseLocalizaIos;
    this.setState({ dataLocalizaIos : jsonLocalizaIos});

    //MOVIDA
    const responseMovidaAndroid = await gplay.app(
      {appId: 'br.com.appfactory.movida' , 
      lang : "pt", 
      country: "br"})
    const jsonMovidaAndroid = await responseMovidaAndroid;
    this.setState({ dataMovidaAndroid: jsonMovidaAndroid });

    const responseMovidaIos = await applestore.app(
      {id: 418900431, 
      country: 'br'
    })
    const jsonMovidaIos = await responseMovidaIos;
    this.setState({ dataMovidaIos : jsonMovidaIos});

    //UNIDAS
    const responseUnidasAndroid = await gplay.app(
      {appId: 'br.com.unidas.apprac.android' , 
      lang : "pt", 
      country: "br"})
    const jsonUnidasAndroid = await responseUnidasAndroid;
    this.setState({ dataUnidasAndroid: jsonUnidasAndroid });

    const responseUnidasIos = await applestore.app(
      {id: 429739212, 
      country: 'br'
    })
    const jsonUnidasIos = await responseUnidasIos;
    this.setState({ dataUnidasIos : jsonUnidasIos});
  }
  render() {
    const { classes } = this.props;
    let localizaGooglePlay = this.state.dataLocalizaAndroid;
    let localizaAppleStore = this.state.dataLocalizaIos

    let movidaGooglePlay = this.state.dataMovidaAndroid;
    let movidaAppleStore = this.state.dataMovidaIos

    let unidasGooglePlay = this.state.dataUnidasAndroid;
    let unidasAppleStore = this.state.dataUnidasIos


    console.log(movidaAppleStore)

    return (
      
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="info">
              <h3><img src={unidasGooglePlay.icon} width="30" height="30"/>{unidasGooglePlay.title}</h3>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>
                  <Icon className={classes.starIcon}>star</Icon>{unidasGooglePlay.scoreText}/5
                  <small><Smartphone/>{unidasGooglePlay.installs}</small>
                </h4>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <Getapp/>{unidasGooglePlay.size}
                  <ThumbsDownUp/>{unidasGooglePlay.reviews}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                  <h3><img src={localizaGooglePlay.icon} width="30" height="30"/>{localizaGooglePlay.title}</h3>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>
                  <Icon className={classes.starIcon}>star</Icon>{localizaGooglePlay.scoreText}/5
                  <small><Smartphone/>{localizaGooglePlay.installs}</small>
                </h4>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <Getapp/>{localizaGooglePlay.size}
                  <ThumbsDownUp/>{localizaGooglePlay.reviews}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
              <h3><img src={movidaGooglePlay.icon} width="30" height="30"/>{movidaGooglePlay.title}</h3>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>
                  <Icon className={classes.starIcon}>star</Icon>{movidaGooglePlay.scoreText}/5
                  <small><Smartphone/>{movidaGooglePlay.installs}</small>
                </h4>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <Getapp/>{movidaGooglePlay.size}
                  <ThumbsDownUp/>{movidaGooglePlay.reviews}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="info">
                  <h3><img src={unidasAppleStore.icon} width="30" height="30"/>{unidasAppleStore.title}</h3>
              </CardHeader>
              <CardBody>
                <h3 className={classes.cardTitle}>
                  <Icon className={classes.starIcon}>star</Icon><strong>{unidasAppleStore.score}/5</strong>
                </h3>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <Getapp/>{(unidasAppleStore.size / 1000000).toFixed(0)}M
                  <ThumbsDownUp/>{unidasAppleStore.reviews}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
              <h3><img src={localizaAppleStore.icon} width="30" height="30"/>{localizaAppleStore.title}</h3>
              </CardHeader>
              <CardBody>
              <h3 className={classes.cardTitle}>
                  <Icon className={classes.starIcon}>star</Icon><strong>{localizaAppleStore.score}/5</strong>
                </h3>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <Getapp/>{(localizaAppleStore.size / 1000000).toFixed(0)}M
                  <ThumbsDownUp/>{localizaAppleStore.reviews}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
              <h3><img src={movidaAppleStore.icon} width="30" height="30"/>{movidaAppleStore.title}</h3>
              </CardHeader>
              <CardBody>
              <h3 className={classes.cardTitle}>
                  <Icon className={classes.starIcon}>star</Icon><strong>{movidaAppleStore.score}/5</strong>
                </h3>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                <Getapp/>{(movidaAppleStore.size / 1000000).toFixed(0)}M
                  <ThumbsDownUp/>{movidaAppleStore.reviews}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "Bugs",
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: "Website",
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Server",
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
