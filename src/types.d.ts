import { MessageApiInjection } from "naive-ui/es/message/src/MessageProvider";
import { DialogApiInjection } from "naive-ui/es/dialog/src/DialogProvider";
import { LoadingBarApiInjection } from "naive-ui/es/dialog/src/LoadingBarProvider";
import { NotificationApiInjection } from "naive-ui/es/dialog/src/NotificationProvider";

declare global {
  interface Window {
    $message: MessageApiInjection;
    $dialog: DialogApiInjection;
    $loadingBar: LoadingBarApiInjection;
    $notification: NotificationApiInjection;
  }

  interface ServerData {
    code: number;
    msg: string;
    data: object | string;
  }
}
