import { useDataStore } from "@/stores/data";

export default class Server {
  private static _server: Server = new Server();
  private static ws: WebSocket;

  static instance(): Server {
    return this._server;
  }

  connect(): Promise<WebSocket> {
    const data = useDataStore();
    data.connected = false;
    return new Promise((resolve, reject) => {
      data.connecting = true;
      Server.ws = new WebSocket(
        `ws://${data.host}:${data.port}/instance/client?text=1`
      );
      Server.ws.onopen = () => {
        resolve(Server.ws);
        data.connected = true;
        data.connecting = false;
      };
      Server.ws.onerror = (error) => {
        reject(error);
        data.connected = false;
        data.connecting = false;
        window.$message.error("服务器连接失败，请检查服务器配置是否正确");
      };
      Server.ws.onmessage = (event) => {
        console.log(event);
        window.$notification.info({
          title: "消息",
          content: event.data,
          duration: 3000,
        });
      };
      Server.ws.onclose = () => {
        data.connected = false;
        data.connecting = false;
      };
    });
  }

  disconnect() {
    Server.ws.close();
  }
}
