import ApplicationController from '@/controllers/application_controller'


export default class extends ApplicationController {
  initialize (): void {
    console.log('registration')
  }
}