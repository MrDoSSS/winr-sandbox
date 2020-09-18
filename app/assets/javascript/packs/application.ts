import ujs from '@rails/ujs'
import { start as activestorage } from '@rails/activestorage'
import turbolinks from 'turbolinks'
import 'channels'

ujs.start()
activestorage()
turbolinks.start()