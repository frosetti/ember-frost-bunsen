import {describeComponent} from 'ember-mocha'
import {PropTypes} from 'ember-prop-types'
import {validatePropTypes} from '../../../../utils/template'

describeComponent(
  'frost-bunsen-container',
  'FrostBunsenContainerComponent',
  {},
  function () {
    validatePropTypes({
      bunsenId: PropTypes.string,
      cellConfig: PropTypes.EmberObject.isRequired,
      model: PropTypes.object.isRequired,
      'on-change': PropTypes.func.isRequired,
      readOnly: PropTypes.bool,
      store: PropTypes.EmberObject.isRequired
    })
  }
)
