const CommunityService = require('./../services/community-service');

class CommunityController {
  constructor() {
    this.communityService = new CommunityService();
  }

  async createCommunity(req, res) {
    const item = req.body;
    const data = await this.communityService.createCommunity(item);
    res.send({
      success: true,
      data,
    });
  }

  async community(req, res) {
    const communityId = req.params.communityId;
    const data = await this.communityService.community(communityId);
    res.send({
      success: true,
      data,
    });
  }

  async communityUsers(req, res) {
    const communityId = req.body.communityId;
    const data = await this.communityService.communityUsers(communityId);
    res.send({
      success: true,
      data,
    });
  }

  async communityList(req, res) {
    const data = await this.communityService.communityList();
    res.send({
      success: true,
      data,
    });
  }
}
module.exports = CommunityController;
