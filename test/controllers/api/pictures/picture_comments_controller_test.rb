require 'test_helper'

class Api::Pictures::PictureCommentsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_pictures_picture_comments_index_url
    assert_response :success
  end

end
