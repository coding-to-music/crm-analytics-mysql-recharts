import React from 'react'
import { observer, inject } from 'mobx-react'
import Add from './Add'
import Update from './Update'
import { Grid } from '@material-ui/core'


const Actions = inject('company')(observer((props) => {

    return (
        <Grid>
            <Update />
            <Add />
        </Grid>
    )
}))

export default Actions